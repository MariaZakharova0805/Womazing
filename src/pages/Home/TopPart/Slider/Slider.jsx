import React from "react";
import { NavLink } from "react-router-dom";
import ButtonGreen from "../../../../ui/ButtonGreen/ButtonGreen";
import { useHomeData } from "../../../../store/useStore";
import c from "./Slider.module.css";

const Slider = () => {
  const { shownText, setShowText } = useHomeData((state) => state);

  const fadeTexts = [
    {
      id: 1,
      header: "Включай новый сезон с WOMAZING.",
      text: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров.",
    },
    {
      id: 2,
      header: "Что-то новенькое. Мы заждались тебя.",
      text: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
    },
    {
      id: 3,
      header: "Новые поступления в этом сезоне",
      text: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
    },
  ];

  const hideAndShowContent = (num) => {
    setShowText(fadeTexts[num]);
  };

  return (
    <div className={c.slider}>
      <div className={c.slider_content}>
        <h3 className={c.slider_header}>{shownText.header}</h3>
        <p className={c.slider_text}>{shownText.text}</p>
      </div>
      <div className={c.slider_btns}>
        <div
          className={
            shownText.text == fadeTexts[0].text
              ? c.slider_btn_active
              : c.slider_btn
          }
          onClick={() => {
            hideAndShowContent(0);
          }}
        ></div>
        <div
          className={
            shownText.text == fadeTexts[1].text
              ? c.slider_btn_active
              : c.slider_btn
          }
          onClick={() => {
            hideAndShowContent(1);
          }}
        ></div>
        <div
          className={
            shownText.text == fadeTexts[2].text
              ? c.slider_btn_active
              : c.slider_btn
          }
          onClick={() => {
            hideAndShowContent(2);
          }}
        ></div>
      </div>
      <NavLink to={"/shop"} className={c.btn_OpenShop}>
        <ButtonGreen>Открыть магазин</ButtonGreen>
      </NavLink>
    </div>
  );
};

export default Slider;
