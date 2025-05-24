import React, { useEffect, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import OTP from "../OTP/OTP.jsx";
import { IoCloseSharp } from "react-icons/io5";
const LoginPopUp = ({ setShowLogin }) => {
  const [showOTP, setShowOTP] = useState(false);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { url, setToken, setAvatar } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      setLoading(true);
      newUrl += "/api/user/login";
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        setAvatar(response.data.avatar);
        localStorage.setItem("avatar", response.data.avatar);
        toast.success("Login Successfull");
        setLoading(false);
      } else {
        toast.error(response.data.message);
        setShowLogin(false);
        setLoading(false);
      }
    } else {
      setShowOTP(true);
    }
  };

  return showOTP === true ? (
    <div>
      <OTP data={data} />
    </div>
  ) : (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <IoCloseSharp
            height="25px"
            width="25px"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              type="text"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Enter Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit">
          {loading ? (
            <h5>Processing...</h5>
          ) : currState === "Sign Up" ? (
            "Create Account"
          ) : (
            "Login "
          )}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
