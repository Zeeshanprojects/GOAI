import React from "react";
import Images from "../assets/Images/Image";
import "./preloader.css";

export default function Preloader() {
  return (
    <div className="preloader-container">
      <img src={Images.logo} alt="logo" className="preloader-logo" />
    </div>
  );
}
