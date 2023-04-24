import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import c from "./NavBar.module.css";
const NavBar = () => {
  const menuLinks = [
    { id: 1, href: `/`, text: "Главная" },
    { id: 2, href: `/shop`, text: "Магазин" },
    { id: 3, href: `/about`, text: "О нас" },
    { id: 4, href: `/contacts`, text: "Контакты" },
  ];

  return (
    <div className={c.menu}>
      <span className={c.burger}>
        <i className="icon-menu"></i>
      </span>
      <nav>
        {menuLinks.length ? (
          <ul className={c.links}>
            {menuLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={`${link.href}`}
                  className={({ isActive, isPending }) =>
                    isActive ? c.link_active : isPending ? "" : c.link
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>{/* other code */}</p>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
