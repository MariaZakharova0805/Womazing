import React, { useSte } from "react";
import classes from "./Footer.module.css";

import FooterAbout from "./FooterAbout";
import Contacts from "./Contacts";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <FooterAbout />
        <Contacts />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
