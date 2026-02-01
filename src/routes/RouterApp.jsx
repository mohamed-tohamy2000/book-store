import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import Mainlayout from "../layouts/MianLayout";
import HomePage from "../pages/HomePage";
import AboutusPage from "../pages/AboutusPage";
export default function RouterApp() {
    return (
        <>
            <Routes>
                
                <Route path="/" element={<Mainlayout />} >
                    <Route index element={<HomePage/>} />
                    {/* Auth Pages */}
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="add-code" element={<AddCodePage />} />
                    <Route path="reset-password" element={<ResetPasswordPage />} />
                    <Route path="forget-password" element={<ForgetPasswordPage />} />
                    <Route path="about" element={<AboutusPage/>} />
                </Route>
            </Routes>
        </>
    )
}