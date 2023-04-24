import React from "react";
import c from "./HeaderH2.module.css"

const HeaderSM = (props) => {
  return <h2 className={c.header_h2}>{props.children}</h2>;
};

export default HeaderSM;
