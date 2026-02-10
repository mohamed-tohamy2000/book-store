import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MianLayout";
import AboutusPage from "../pages/AboutusPage";
import NotFondPage from "../pages/NotFondPage";
import BookPage from "../pages/BookPage";

export default function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Auth Pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutusPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
          <Route path="add-code" element={<AddCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="*" element={<NotFondPage/>} />
        </Route>
      </Routes>
    </>
  );
}
