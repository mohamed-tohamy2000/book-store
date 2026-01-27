import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";

export default function RouterApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Auth Pages */}
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="add-code" element={<AddCodePage />} />
                <Route path="reset-password" element={<ResetPasswordPage />} />
                <Route path="forget-password" element={<ForgetPasswordPage />} />
            </Routes>
        </>
    )
}