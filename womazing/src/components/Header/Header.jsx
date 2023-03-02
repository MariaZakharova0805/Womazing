import React, { useSte } from "react";
import classes from "./Header.module.css";

import Logo from "../Logo/Logo";
import NavBar from "./NavBar";
import ContactPhone from "./ContacPhone";
import CartLink from "./CartLink";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <NavBar />
        <span className={classes.rightAlign}>
          <ContactPhone />
          <CartLink />
        </span>
      </div>
    </header>
  );
};

export default Header;
