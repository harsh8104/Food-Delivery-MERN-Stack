import React, { useContext, useEffect, useState } from "react";
import "./OTP.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
const OTP = ({ data }) => {
  const [showOTP, setShowOtp] = useState(true);
  const { url, setToken, setAvatar } = useContext(StoreContext);
  let otp, userOTP;
  let response;
  const onChangeHandler = (e) => {
    otp = e.target.value;
  };
  const handleAPI = async () => {
    let newUrl = url;
    newUrl += "/api/user/register";
    response = await axios.post(newUrl, data);
    newUrl = url;
    newUrl += "/api/user/verifyemail";
    const otpResponse = await axios.post(newUrl, {
      email: data.email,
    });
    userOTP = otpResponse.data.newUser.OTP;
  };
  useEffect(() => {
    handleAPI();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userOTP == otp) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setAvatar(response.data.avatar);
      setShowOtp(false);
      localStorage.setItem("avatar", response.data.avatar);
      toast.success("Account Created Successfully");
    } else {
      setShowOtp(false);
      toast.error("Invalid OTP");
      let newUrl = url;
      newUrl += "/api/user/removeuser";
      await axios.post(newUrl, {
        email: data.email,
      });
    }
  };
  if (showOTP) {
    return (
      <div className="otp-popup">
        <form onSubmit={handleSubmit} className="otp-popup-container">
          <div className="otp-popup-title">
            <h2>OTP Verification</h2>
            <img
              onClick={() => setShowOtp(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="otp-popup-inputs">
            <input
              name="otp"
              type="text"
              onChange={onChangeHandler}
              placeholder="Enter OTP"
              required
            />
          </div>
          <button type="submit">Verify OTP</button>
          <div className="otp-popup-resend">
            <p>
              Didn't receive the OTP? <span>Resend OTP</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
};

export default OTP;
