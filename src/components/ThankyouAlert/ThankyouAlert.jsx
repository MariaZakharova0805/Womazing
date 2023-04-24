import React from "react";
import { NavLink } from "react-router-dom";
import { useThankyouAlert, useItems } from "../../store/useStore";
import c from "./ThankyouAlert.module.css";

const ThankyouAlert = () => {
  const { visible, setVisible } = useThankyouAlert((state) => state);
  const { clearCartItems, clearCartItemsAmount } = useItems((state) => state);
  const rootClasses = [c.myAlert];
  if (visible) {
    rootClasses.push(c.active);
  }

  const closeAlert = () => {
    clearCartItems();
    clearCartItemsAmount();
    setVisible(false);
  };

  return (
    <NavLink to={"/"} className={c.link}>
      <div className={rootClasses.join(" ")} onClick={(e) => closeAlert(e)}>
        <div className={c.content} onClick={(e) => e.stopPropagation()}>
          <p className={c.text}>Ваша заявка отправлена. Спасибо за заказ!</p>
          <span
            onClick={(e) => {
              closeAlert(e);
            }}
          >
            <NavLink to={"/"} className={c.link}>
              Перейти на главную
            </NavLink>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ThankyouAlert;
