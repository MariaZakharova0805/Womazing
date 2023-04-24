import React from "react";
import c from "./ButtonGreen.module.css";

const ButtonGreen = ({ children, ...props }) => {
  return (
    <button className={c.button} {...props}>
      {children}
    </button>
  );
};

export default ButtonGreen;
