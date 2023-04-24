import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Logo.module.css";
import logoImg from "../../app/img/Logo/WomazingLogo.svg";

const Logo = () => {
  return (
    <NavLink to={"/"} className={c.logo}>
      <span className={c.companyLogo}>
        <img src={logoImg} alt="logo" className={c.company_logo} />
      </span>
      <p>womazing</p>
    </NavLink>
  );
};

export default Logo;
