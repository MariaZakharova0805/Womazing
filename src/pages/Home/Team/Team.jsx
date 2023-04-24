import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Team.module.css";
import HeaderSM from "../../../shared/Headers/HeaderH2";
import ImageSlider from "./ImageSlider/ImageSlider";

const Team = () => {
  return (
    <div className={c.team}>
      <div className="slide-container"></div>
      <div className={c.header_h2}>
        <HeaderSM>Команда мечты Womazing</HeaderSM>
      </div>
      <div className={c.team_container}>
        <ImageSlider />
        <div className={c.description}>
          <h3 className={c.header_h3}>Для каждой</h3>
          <p className={c.description_text}>
            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
          </p>
          <p className={c.description_text}>
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </p>
          <NavLink to={"/about"} className={c.link}>
            Подробнее о бренде
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Team;
