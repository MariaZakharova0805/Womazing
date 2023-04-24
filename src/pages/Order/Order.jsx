// import React from "react";
import React, { useRef } from "react";
import uuid from "react-uuid";
import emailjs from "@emailjs/browser";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import Container from "../../shared/Container/Container";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
import { useForm } from "react-hook-form";
import { useItems, useThankyouAlert } from "../../store/useStore";
import { formOrderData, formOrderJSON } from "../../utils/utils";
import c from "./Order.module.css";

const Order = () => {
  console.log('test')
  return (
    <Container>
      <HeaderH1>Оформление заказа</HeaderH1>
    </Container>
  );
};

export default Order;
