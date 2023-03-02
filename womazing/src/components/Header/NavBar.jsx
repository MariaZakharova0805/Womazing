import React, { useSte } from "react";
import classes from "./NavBar.module.css";
import uuid from "react-uuid";

const NavBar = () => {
  const menuLinks = [
    { id: uuid(), href: "#", text: "Главная" },
    { id: uuid(), href: "#", text: "Магазин" },
    { id: uuid(), href: "#", text: "О бренде" },
    { id: uuid(), href: "#", text: "Контакты" },
  ];

  const res = menuLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className={classes.link}>
          {link.text}
        </a>
      </li>
    );
  });

  return (
    <nav className={classes.menu}>
      <span className={classes.burger}>
        <i className="icon-menu"></i>
      </span>
      <ul className={classes.links}>{res}</ul>
    </nav>
  );
};

export default NavBar;
