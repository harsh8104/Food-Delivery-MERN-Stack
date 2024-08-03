import React, { useContext, useState, useEffect } from "react";
import "./ContactUs.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ContactUsForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { url } = useContext(StoreContext);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const newUrl = url + "/api/contact/contact-us";

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      console.log(toast);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="contactus-form">
      <form onSubmit={onSubmit} className="contactus-form-container">
        <div className="contactus-form-title">
          <h2>Contact Us</h2>
        </div>
        <div className="contactus-form-inputs">
          <input
            name="name"
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Enter Your Name"
            required
          />
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Enter Your Phone Number"
            required
          />
          <textarea
            name="message"
            onChange={onChangeHandler}
            value={data.message}
            placeholder="Enter Your Message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
