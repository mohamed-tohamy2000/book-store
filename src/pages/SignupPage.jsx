import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    const domain = "https://bookstore.eraasoft.pro/api";
    const endPoint = "/register";
    const url = domain + endPoint;

    // بدل alert
    if (values.password !== values.confirmpassword) {
      toast.error("Password not matching");
      return;
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
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 422) {
        const msg =
          error.response.data?.message ||
          error.response.data?.errors?.email?.[0] ||
          "This email is already registered";

        toast.error(msg);
      } else {
        toast.error("Something went wrong");
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

    
  });

  return (
    <>
      {/* Hot Toast - top center dropdown */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            marginTop: "20px",
          },
        }}
      />

      <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center gap-6">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          <Form className="w-200 p-4 bg-[#F5F5F5] flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
                <span>First Name</span>
                <Field
                  name="firstname"
                  className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
                  placeholder="John"
                />
                <ErrorMessage name="firstname" component="p" className="text-error" />
              </div>

              <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
                <span>Last Name</span>
                <Field
                  name="lastname"
                  className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
                  placeholder="Smith"
                />
                <ErrorMessage name="lastname" component="p" className="text-error" />
              </div>
            </div>

            <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
              <span>Email</span>
              <Field
                name="email"
                className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
                placeholder="example@gmail.com"
              />
              <ErrorMessage name="email" component="p" className="text-error" />
            </div>

            <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
              <span>Password</span>
              <Field
                name="password"
                type="password"
                className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="p" className="text-error" />
            </div>

            <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
              <span>Confirm password</span>
              <Field
                name="confirmpassword"
                type="password"
                className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
                placeholder="Enter password"
              />
              <ErrorMessage name="confirmpassword" component="p" className="text-error" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-4">
                <input type="checkbox" className="checkbox checkbox-error" />
                <span className="text-black">Remember me</span>
              </div>
              <span className="text-mainColor">Forget password?</span>
            </div>

            {/* خلي بالك type="submit" */}
            <button type="submit" className="bg-mainColor p-4 rounded-lg text-white">
              Login
            </button>

            <div className="mt-5">
              <p className="text-black font-semibold text-center">
                Don't have an account?
                <span className="text-mainColor"> Signup</span>
              </p>
            </div>

            <div className="text-[#00000080] w-full text-center my-8">or</div>

            <div className="flex flex-col gap-4">
              <button className="flex justify-center gap-4 shadow-xl bg-white w-full rounded-lg text-black p-4">
                <img
                  className="h-5"
                  src="https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png"
                  alt=""
                />
                Login with Google
              </button>

              <button className="flex justify-center gap-4 shadow-xl bg-white w-full rounded-lg text-black p-4">
                <img
                  className="h-5"
                  src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png"
                  alt=""
                />
                Login with Facebook
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
