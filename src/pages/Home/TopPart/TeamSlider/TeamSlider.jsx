import React from "react";
import { NavLink } from "react-router-dom";
import { useHomeData } from "../../../../store/useStore";
import HeaderH3 from "../../../../shared/Headers/HeaderH3";
import c from "./TeamSlider.module.css";

const TeamSlider = () => {
  const { fadeImg, setFadeImg } = useHomeData((state) => state);

  const fadeImages = [
    { id: 1, src: "../img/TeamImg/image_one.png" },
    { id: 2, src: "../img/TeamImg/image_two.png" },
    { id: 3, src: "../img/TeamImg/image_three.png" },
  ];

  const handleClick = (num) => {
    setFadeImg(fadeImages[num]);
  };

  return (
    <div className={c.slider}>
      <div className={c.img_container}>
        <img className={c.slider_img} src={fadeImg.src} />
        <div className={c.slider_btns}>
          <div
            className={
              fadeImg.src == fadeImages[0].src
                ? c.slider_btn_active
                : c.slider_btn
            }
            onClick={() => handleClick(0)}
          ></div>
          <div
            className={
              fadeImg.src == fadeImages[1].src
                ? c.slider_btn_active
                : c.slider_btn
            }
            onClick={() => handleClick(1)}
          ></div>
          <div
            className={
              fadeImg.src == fadeImages[2].src
                ? c.slider_btn_active
                : c.slider_btn
            }
            onClick={() => handleClick(2)}
          ></div>
        </div>
      </div>
      <div className={c.text_container}>
        <HeaderH3>Для каждой</HeaderH3>
        <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
        <p>
          Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
          подчеркивают достоинства каждой девушки.
        </p>
        <NavLink to={"/about"} className={c.buttonLink}>
          Подробнее о бренде
        </NavLink>
      </div>
    </div>
  );
};

export default TeamSlider;
