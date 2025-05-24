import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/Place-Order/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import LoginError from "./pages/LoginError/LoginError.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import OTP from "./components/OTP/OTP.jsx";
import UserChat from "./components/UserChat/UserChat.jsx";
import TrackOrder from "./components/TrackOrder/TrackOrder.jsx";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/loginerror" element={<LoginError />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/verify-email" element={<OTP />} />
          <Route path="/chat" element={<UserChat />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
