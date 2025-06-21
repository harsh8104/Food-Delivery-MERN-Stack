import React, { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { IoBag } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import UserChat from "../UserChat/UserChat.jsx";
const Navbar = ({ setShowLogin }) => {
  const { token, setToken, getTotalCartItems, avatar } =
    useContext(StoreContext);
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <Link
          to="/contact-us"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact-Us
        </Link>
        <Link to="/chat">Chat with us</Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <Badge badgeContent={getTotalCartItems()} color="primary">
              <IoBag size={35} />
            </Badge>
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img className="profile-img" src={avatar} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />

                <p>Orders</p>
              </li>
              <hr />

              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={logOut}>Log Out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
