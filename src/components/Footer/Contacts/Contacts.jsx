import React from "react";
import uuid from "react-uuid";
import c from "./Contacts.module.css";

const Contacts = () => {
  const contactData = [
    {
      id: uuid(),
      href: "tel:+77711158390",
      inner: "+7 (771) 115-83-90",
    },
    {
      id: uuid(),
      href: "mailto:fraumaria2011@yandex.ru",
      inner: "hello@womazing.com",
    },
  ];

  const contactList = contactData.map((item) => {
    return (
      <a key={item.id} className={c.footer_contact} href={item.href}>
        {item.inner}
      </a>
    );
  });
  return <div className={c.contacts}>{contactList}</div>;
};
export default Contacts;
