import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import UiComponant from '../components/Authentication/UiComponant';
import BtnType from "../components/Authentication/BtnType"
import toast from "react-hot-toast";
import Herosection from "../components/HeroSection/Herosection";
import * as Yup from "yup";
import { authApi } from "../api";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords do not match")
            .required("Confirm password is required"),
    });

    const handleRegister = async (values) => {
        const otp = sessionStorage.getItem("otp");
        const email = sessionStorage.getItem("email");

        if (!otp || !email) {
            toast.error("Please complete forget password steps first");
            navigate("/forget-password");
            return;
        }

        const data = {
            otp,
            email,
            password: values.password,
            password_confirmation: values.confirmpassword,
        }
        if (values.password !== values.confirmpassword) {
            toast.error("Password not matching");
            return;
        }
        try {
            const res = await authApi.resetPassword(data);
            console.log(res);
            toast.success(res.data?.message || "Password reset successfully");
            sessionStorage.removeItem("otp");
            sessionStorage.removeItem("email");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <>
            <Herosection h="h-84.5" />
            <div className="w-full  bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 p-5">
                <h1 className="font-semibold text-mainColor text-2xl "> Create new password!</h1>
                <h1 className="text-[14px] text-[#22222280] font-normal">Create a strong password Your new password must be different from previous one</h1>
                <Formik
                    initialValues={{ password: "", confirmpassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => { handleRegister(values) }}
                >
                    <Form className="w-200 p-4 bg-[#F5F5F5] flex flex-col gap-4">
                        <div>
                            <UiComponant name="password" label="Password" placeholder="Enter password" type="password" />
                            <h1 className="text-[14px] text-[#22222280] font-normal">Must be at least 8 characterss</h1>

                        </div>
                        <UiComponant name="confirmpassword" label="Confirm password" placeholder="Enter your password" type="password" />
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className=" checkbox checkbox-error" />
                            <span className='text-black'>Remember me</span>
                        </div>
                        <BtnType lable="Reset password" />
                    </Form>
                </Formik>
            </div>
        </>
    )
}
