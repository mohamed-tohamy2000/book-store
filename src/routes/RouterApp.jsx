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
import Profile from "../pages/Profile";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import WishList from "../pages/WishList";
import { ProductDetails } from "../components/tabDetails/ProductDetails";
import CustomerReviews from "../components/tabDetails/CustomerReviews";

import silider from "../../src/assets/images/sectionlogo/silider.png";
import FlashSaleSlider from "../components/FlashSale/FlashSaleSlider";
import History from "../pages/History";

export default function RouterApp() {
   const dummyItems = [1, 2, 3, 4];
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
          <Route path="Profile" element={<Profile />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="book" element={<BookPage />} />

          <Route path="product/:productId" element={<ProductPage />}>
            <Route path="details" element={<ProductDetails />} />
            <Route path="review" element={<CustomerReviews />} />
            <Route
              path="recommided"
              element={
                <div >
                  <FlashSaleSlider items={dummyItems} silider={silider}/>
                </div>
              }
            />
          </Route>

          <Route path="Cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="History" element={<History />} />
          <Route path="*" element={<NotFondPage />} />
        </Route>
      </Routes>
    </>
  );
}
