import React from "react";
import c from "./License.module.css";
import Logo from "../../../shared/Logo/Logo";

const License = () => {
  return (
    <div className={c.footer}>
      <span className={c.footer_logo}>
        <Logo />
      </span>
      <div className={c.footer_text}>
        <p>© Все права защищены</p>
        <p>Политика конфиденциальности</p>
        <p>Публичная оферта</p>
      </div>
    </div>
  );
};
export default License;
