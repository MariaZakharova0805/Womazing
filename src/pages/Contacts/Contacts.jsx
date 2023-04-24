import React from "react";
import c from "./Contacts.module.css";
import Container from "../../shared/Container/Container";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import Iframe from "react-iframe";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
import { useAlert } from "../../store/useStore";

const Contacts = () => {
  const { setVisible } = useAlert((state) => state);


  const contData = [
    {
      id: 123,
      name: "Телефон",
      href: "tel:+74958235412",
      text: "+7 (495) 823-54-12",
    },
    {
      id: 1234,
      name: "E-mail",
      href: "mailto:info@sitename.com",
      text: "info@sitename.com",
    },
    {
      id: 12345,
      name: "Адрес",
      href: "https://goo.gl/maps/h75oXq4s4GHo2P4DA",
      text: " г. Москва, 3-я улица Строителей, 25",
    },
  ];

  const contBlock = contData.map((item) => {
    return (
      <div key={item.id} className={c.contact_box_item}>
        <p>{item.name}</p>
        <h4>
          <a href={item.href} target="_blank" className={c.contact_link}>
            {item.text}
          </a>
        </h4>
      </div>
    );
  });

  return (
    <Container>
      <HeaderH1>Контакты</HeaderH1>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2249.138790872269!2d37.532474215928!3d55.68657473053573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCc0L7RgdC60LLQsCwgMy3RjyDRg9C70LjRhtCwINCh0YLRgNC-0LjRgtC10LvQtdC5LCAyNQ!5e0!3m2!1sru!2skz!4v1675330057880!5m2!1sru!2skz"
        width="100%"
        height="450"
        id=""
        loading="lazy"
        style="border: 0"
        className={c.iframe}
        display="block"
        position="relative"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen=""
      />
      <div className={c.contact_box}>{contBlock}</div>
      <div className={c.btn}>
        <ButtonGreen onClick={() => setVisible(true)} >Написать нам</ButtonGreen>
      </div>
    </Container>
  );
};

export default Contacts;
