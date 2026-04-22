import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UiComponant from "../components/Authentication/UiComponant";
import SoBtn from "../components/Authentication/SoBtn";
import toast from "react-hot-toast";
import Herosection from "../components/HeroSection/Herosection";
import { useAuthStore } from "../store";
import { authApi } from "../api";

export default function LoginPage() {
  const { login } = useAuthStore();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const { rememberMe, ...data } = values;

    try {
      const res = await authApi.login(data);
      const { token } = res.data.data;
      login(token, rememberMe || false);
      console.log(res.data.data.token);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center gap-10 font-open pt-3">
        <h1 className="font-semibold text-mainColor text-2xl">Welcome Back!</h1>

        <div className="flex flex-col w-full items-center">
          <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-200 p-4   flex flex-col gap-6">
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
              <SoBtn
                p="Don’t have an account?"
                to={"/signup"}
                ptow=" Signup"
                ask="Forget password?"
                askTo="/forget-password"
                stet="Remember me"
                lable="Log in"
                name="rememberMe"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
