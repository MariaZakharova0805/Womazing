import React from "react";
import uuid from "react-uuid";
import classes from "./Contacts.module.css";
const Contacts = () => {
  const contactData = [
    {
      id: uuid(),
      href: "tel:+74958235412",
      inner: "+7 (495) 823-54-12",
    },
    {
      id: uuid(),
      href: "mailto:hello@womazing.com",
      inner: "hello@womazing.com",
    },
  ];

  const contactList = contactData.map((item) => {
    return (
      <a key={item.id} className={classes.footer_contact} href={item.href}>
        {item.inner}
      </a>
    );
  });
  return <div className={classes.contacts}>{contactList}</div>;
};
export default Contacts;
