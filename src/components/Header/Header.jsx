import React from "react";
import c from "./Header.module.css";
import Logo from "../../shared/Logo/Logo";
import NavBar from "./NavBar/NavBar";
import CarretLink from "./CarretLink/CarretLink";
import PhoneLink from "./PhoneLink/PhoneLink.";

const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <span className={c.logo}>
          <Logo />
        </span>
        <span className={c.navbar}>
          <NavBar />
        </span>
        <span className={c.call}>
          <PhoneLink />
        </span>
        <span className={c.carret}>
          <CarretLink />
        </span>
      </div>
    </header>
  );
};

export default Header;
