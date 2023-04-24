import React from "react";
import c from "./Slogan.module.css";
import HeaderH3 from "../../../shared/Headers/HeaderH3";
import HeaderSM from "../../../shared/Headers/HeaderH2";
import { useHomeData } from "../../../store/useStore";

const Slogan = () => {
  const { descriptions } = useHomeData((state) => state);
  const slogans = descriptions.map((item) => {
    return (
      <div key={item.id}>
        <div className={c.slogan_item}>
          <img src={item.img} alt={item.header} className={c.img} />
          <HeaderH3>{item.header}</HeaderH3>
          <p className={c.text}>{item.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={c.header_h2}>
        <HeaderSM>Что для нас важно</HeaderSM>
      </div>
      <div className={c.slogan}>{slogans}</div>
    </div>
  );
};
export default Slogan;
