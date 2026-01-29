import { Form, Formik } from "formik";
import UiComponant from "../components/Authentication/UiComponant";
import * as Yup from "yup";
import axios from "axios";
import BtnType from "../components/Authentication/BtnType";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const handleSubmit = async (values) => {
    const domain = "https://bookstore.eraasoft.pro/api";
    const endPoint = "/forget-password";
    const url = domain + endPoint;

    const data = {
      email: values.email,
    };

    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      toast.success(res.data.message);
      navigate("/add-code");
    } catch (error) {
      console.log(error);

      toast.error(error);
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-4 font-open pt-3 h-screen ">
      <h1 className="font-semibold text-mainColor text-2xl">
        Forget Password?
      </h1>
      <p className=" text-center text-sm font-normal  text-[#22222280]">
        Enter your email to reset your password
      </p>

      <div className="flex flex-col w-full  items-center">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="w-200 p-4   flex flex-col gap-8">
            <UiComponant
              name="email"
              label="Email"
              placeholder="example@gmail.com"
              type={"email"}
            />

            <BtnType lable={"Reast Password"} />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
