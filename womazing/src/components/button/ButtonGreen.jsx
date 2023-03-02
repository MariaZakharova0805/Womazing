import React, { useState } from "react";
import c from "./ButtonGreen.module.css";

const ButtonGreen = (props) => {
  return (
    <div>
      <a href="#" className={c.button}>
        {props.children}
      </a>
    </div>
  );
};

export default ButtonGreen;
