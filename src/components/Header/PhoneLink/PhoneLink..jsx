import React from "react";
import c from "./PhoneLink.module.css";
import phoneImg from "../../../app/img/Phone_call.svg";
import { useAlert } from "../../../store/useStore";

const PhoneLink = () => {
  const { setVisible } = useAlert((state) => state);

  return (
    <img className={c.img} src={phoneImg} onClick={() => {setVisible(true)}} />
  );
};

export default PhoneLink;
