import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UiComponant from "../components/Authentication/UiComponant";
import SoBtn from "../components/Authentication/SoBtn";
import toast from "react-hot-toast";
import { domain } from "../store/domain";
import Herosection from "../components/HeroSection/Herosection";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    const endPoint = "/register";
    const url = domain + endPoint;

    if (values.password !== values.confirmpassword) {
      toast.error("Password not matching");
    }

    const data = {
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmpassword,
    };

    try {
      const res = await axios.post(url, data);
      console.log(res);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.status == 500) {
        toast.error("Your Email Is Orady Tekan");
      }
    }
  };
  const SignupSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),

    lastname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),

    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="w-full  bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 ">
        {/* logic componant (formik) */}
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            terms: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={handleRegister}
        >
          {/* ui componant  */}
          <Form className="w-200 p-4 bg-[#F5F5F5] flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-5">
              <UiComponant
                name="firstname"
                label="First Name"
                placeholder="John"
                type="firstname"
              />
              <UiComponant
                name="lastname"
                label="Last Name"
                placeholder="Smith"
                type="lastname"
              />
            </div>

            <UiComponant
              name="email"
              label="Email"
              placeholder="example@gmail.com"
              type="email"
            />

            <UiComponant
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
            <UiComponant
              name="confirmpassword"
              label="Confirm password"
              placeholder="Enter your password"
              type="password"
            />

            <SoBtn
              p="Already have an account?"
              to={"/login"}
              ptow=" Login"
              ask=""
              stet=" Agree with Terms & Conditions"
              btn="Sign Up"
              name="terms"
            />
          </Form>
        </Formik>
      </div>
    </>
  );
}
