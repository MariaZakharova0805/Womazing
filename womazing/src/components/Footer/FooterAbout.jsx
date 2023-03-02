import React from "react";
import classes from "./FooterAbout.module.css";
import Logo from "../Logo/Logo";

const FooterAbout = () => {
  return (
    <div className={classes.footer_columnFirst}>
      <Logo />
      <div className={classes.footer_text}>
        <p>© Все права защищены</p>
        <p>Политика конфиденциальности</p>
        <p>Публичная оферта</p>
      </div>
    </div>
  );
};
export default FooterAbout;
