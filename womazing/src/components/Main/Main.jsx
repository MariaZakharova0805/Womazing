import React, { useState } from "react";
import c from "./Main.module.css";
import About from "./About/About"

const Main = () => {
  return <div className={c.main}>
    <About/>

  </div>;
};
export default Main;
