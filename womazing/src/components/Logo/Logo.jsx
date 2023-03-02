import React, { useSte } from "react";
import classes from "./Logo.module.css";
import logoImg from "../../img/Vector.svg";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <span className={classes.companyLogo}>
        <img src={logoImg} alt="logo" className={classes.company_logo} />
      </span>
      <p>womazing</p>
    </div>
  );
};

export default Logo;
