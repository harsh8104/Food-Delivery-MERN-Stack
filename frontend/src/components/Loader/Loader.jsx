import React from "react";
import { assets } from "../../assets/assets";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="container">
        <img className="food-loader" src={assets.Food_Loader} alt="" />
      </div>
    </>
  );
};

export default Loader;
