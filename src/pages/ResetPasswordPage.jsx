import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import UiComponant from '../components/Authentication/UiComponant';
import BtnType from "../components/Authentication/BtnType"
import toast from "react-hot-toast";
import { domain } from "../store/domain";
import Herosection from "../components/HeroSection/Herosection";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const handleRegister = async (values) => {

        const endPoint = "/reset-password";
        const url = domain + endPoint;
        const data = {
            otp: sessionStorage.getItem("otp"),
            email: sessionStorage.getItem("email"),
            password: values.password,
            confirmpassword: values.confirmpassword,
        }
        if (values.password !== values.confirmpassword) {
            toast.error("Password not matching");
            return;
        }
        try {
            const res = await axios.post(url, data);
            console.log(res);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Herosection h="h-84.5" />
            <div className="w-full  bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 p-5">
                <h1 className="font-semibold text-mainColor text-2xl "> Create new password!</h1>
                <h1 className="text-[14px] text-[#22222280] font-normal">Create a strong password Your new password must be different from previous one</h1>
                <Formik initialValues={{ password: "", confirmpassword: "" }} onSubmit={(values) => { handleRegister(values) }}>
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