import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <video className="header-gif" muted loop autoPlay>
        <source src={assets.header_gif} type="video/mp4" />
      </video>
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Select your favourite food and enjoy it just on your fingertips with
          us.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
