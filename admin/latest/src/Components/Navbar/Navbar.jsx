import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { ImUser } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ImUser size={35} />
    </div>
  );
};

export default Navbar;
