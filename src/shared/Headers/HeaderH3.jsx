import React from "react";
import c from "./HeaderH3.module.css";

const HeaderH3 = (props) => {
  return <div className={c.header}>{props.children}</div>;
};

export default HeaderH3;
