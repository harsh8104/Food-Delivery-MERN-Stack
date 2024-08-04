import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            We prioritize quality in every dish we prepare. By sourcing the
            freshest ingredients from trusted local farms and suppliers, we
            ensure that every meal is packed with flavor and nutrition. Our
            commitment to quality means that you can enjoy meals that not only
            taste great but are also good for you.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privicy-Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>contact@service.com</li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <p>
        <div className="footer-copyright">
          Copyright 2024 @ quickbyte.com-All Rights Reserved
        </div>
      </p>
    </div>
  );
};

export default Footer;
