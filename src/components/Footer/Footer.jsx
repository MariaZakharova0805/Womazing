import React from "react";
import Container from "../../shared/Container/Container";
import Contacts from "./Contacts/Contacts";
import c from "./Footer.module.css";
import License from "./Licines/License";
import SocialLinks from "./Socials/SocialLinks";

const Footer = () => {
  return (
    <div className={c.footer}>
      <Container>
        <div className={c.container}>
          <License />
          <Contacts />
          <SocialLinks />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
