// Import Components

// In All Pages
import Headr from "./components/headr/Headr";
import Footer from "./components/footer/Footer";
import SidebarLogic from "./components/sidebar/SidebarLogic";
import CartSidebarLogic from "./components/cart_sidebar/CartSidebarLogic";
import Toastify from "./components/toastify/Toastify";
import MyModel from "./components/my_model/MyModel";
import UpButton from "./components/up_button/UpButton";

// Pages
import Home from "./pages/home_page/Home";
import Store from "./pages/store_page/Store";
import ProductDetails from "./pages/product_details_page/ProductDetails";
import Blogs from "./pages/blogs_page/Blogs";
import BlogDetails from "./pages/blog_details_page/BlogDetails";
import ContactUs from "./pages/contact_us_page/ContactUs";
import AboutUs from "./pages/about_us_page/AboutUs";
import Faqs from "./pages/faqs_page/Faqs";
import PrivacyPolicy from "./pages/privacy_policy_page/PrivacyPolicy";
import TermsConditions from "./pages/terms_conditions_page/TermsConditions";
import UserAccountPage from "./pages/user_account_page/UserAccountPage";
import Wishlist from "./pages/wishlist_page/Wishlist";
import Compare from "./pages/compare_page/Compare";
import Cart from "./pages/cart_page/Cart";
import Checkout from "./pages/checkout_page/Checkout";
import Login from "./pages/login_page/Login";
import Register from "./pages/register_page/Register";
import ErrorPage from "./pages/error_page/ErrorPage";

// Import React Router Components
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SidebarLogic />
      <CartSidebarLogic />
      <Toastify />
      <MyModel />
      <UpButton />

      <Headr />

      <div
        className="between-headr-footer bg-section"
        style={{ padding: "40px 0 80px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-store" element={<Store />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/user-account" element={<UserAccountPage />} />
          <Route path="/whishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
