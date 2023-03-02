import React from "react";
import uuid from "react-uuid";
import classes from "./SocialLinks.module.css";
import VM from "../../img/visa-mastercard.svg";

const SocialLinks = () => {
  const social = [
    {
      id: uuid(),
      href: "https://www.instagram.com/",
      className: "icon-instagram",
    },
    {
      id: uuid(),
      href: "https://www.facebook.com/",
      className: "icon-facebook-squared",
    },
    { id: uuid(), href: "https://twitter.com/", className: "icon-twitter" },
  ];

  const Links = social.map((item) => {
    return (
      <a key={item.id} href={item.href} target="_blank">
        <i className={item.className}></i>
      </a>
    );
  });
  
  return (
    <div className={classes.footer_social}>
      <div>{Links}</div>
      <img
        className={classes.footer_ccDetails}
        src={VM}
        alt="visa and masterCard"
      />
    </div>
  );
};
export default SocialLinks;
