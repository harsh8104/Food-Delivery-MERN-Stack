import React from "react";
import { assets } from "../../assets/assets";
import "./LoginError.css";
const LoginError = () => {
  return (
    <div className="main">
      <img src={assets.LoginError} alt="" />
      <h2 className="empty-cart-title">Your food is just one step away.</h2>
      <h4 className="empty-cart-text-one">Login/SignUp to continue.</h4>
    </div>
  );
};

export default LoginError;
