import React, { useState } from "react";
import ButtonGreen from "../../button/ButtonGreen";
import c from "./About.module.css";
import img1 from "../../../img/firstSection_columnOne-img.png";
import img2 from "../../../img/firstSection_columnTwo-img.png";

const About = () => {
  return (
    <div className={c.about}>
      <div className="container">
        <h1 className={c.header_h1}>О бренде</h1>
        <div className={c.top}>
          <div className={c.about_img}>
            <img src={img1} alt="idea_and_woman" />
          </div>
          <div className={c.about_text}>
            <h3 className={c.header_h3}>Идея и женщина</h3>
            <p className={c.regular_text}>
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>
            <p className={c.regular_text}>
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.
            </p>
          </div>
        </div>
        <div className={c.bottom}>
          <div className={c.about_text}>
            <h3 className={c.header_h3}>Магия в деталях</h3>
            <p className={c.regular_text}>
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>
            <p className={c.regular_text}>
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.
            </p>
          </div>

          <div className={c.about_img}>
            <img src={img2} alt="magic_in_details" />
          </div>
        </div>
        <span className={c.button}>
          <ButtonGreen>Перейти в магазин</ButtonGreen>
        </span>
      </div>
    </div>
  );
};
export default About;
