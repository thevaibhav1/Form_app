import React from "react";
import style from "./Logo.module.css";
import logo from "../assets/EZ Works Blue.png";

const Logo = () => {
  return (
    <div className={style.main_container}>
      <img className={style.logo_img} src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
