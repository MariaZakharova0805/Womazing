import React from "react";
import uuid from "react-uuid";

import c from "./ButtonBlack.module.css";

const ButtonBlack = ({ children, className }) => {
  console.log(className)
  return (
    <div>
      <button className={c.button} key={uuid()}>
        {children}
      </button>
    </div>
  );
};

export default ButtonBlack;
