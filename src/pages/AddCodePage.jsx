import { Form, Formik } from "formik";
import BtnType from "../components/Authentication/BtnType";
import FieldInput from "../components/Authentication/FieldInput";
import { Link, useNavigate } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function AddCodePage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    num1: Yup.string().length(1, "Required").required("Required"),
    num2: Yup.string().length(1, "Required").required("Required"),
    num3: Yup.string().length(1, "Required").required("Required"),
    num4: Yup.string().length(1, "Required").required("Required"),
  });

  const handleOnSubmit = async (values) => {
    const code = `${values.num1}${values.num2}${values.num3}${values.num4}`;
    const email = sessionStorage.getItem("email");

    if (!email) {
      toast.error("Please enter your email first");
      navigate("/forget-password");
      return;
    }

    sessionStorage.setItem("otp", code);
    toast.success("Code added successfully");
    navigate("/reset-password");
  };

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-4 font-open pt-3 h-dvh ">
        <h1 className="font-semibold text-mainColor text-2xl">Forget Password?</h1>
        <p className=" text-center text-sm font-normal  text-[#22222280]">
          Enter your email to reset your password
        </p>

        <div className="flex flex-col w-full  items-center">
          <Formik
            initialValues={{ num1: "", num2: "", num3: "", num4: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleOnSubmit(values);
            }}
          >
            <Form className="w-full text-center">
              <div className="w-78 m-auto flex flex-col gap-10 font-bold">
                <div className="flex  justify-center items-center gap-6">
                  <FieldInput name="num1" type="text" maxLength={1} />
                  <FieldInput name="num2" type="text" maxLength={1} />
                  <FieldInput name="num3" type="text" maxLength={1} />
                  <FieldInput name="num4" type="text" maxLength={1} />
                </div>

                <BtnType lable="Reset Password" />

                <div className="mt-5">
                  <p className="text-black font-semibold text-center ">
                    Didn't receive a code?
                    <Link to="/forget-password" className="text-mainColor">
                      {" "}
                      Send again
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
