import React from "react";
import { NavLink } from "react-router-dom";
import carretIcon from "../../../app/img/CarretImg/shoppingBag.svg";
import c from "./CarretLink.module.css";
import { useItems } from "../../../store/useStore";

const CarretLink = () => {
  const { cartItemsAmount } = useItems((state) => state);

  return (
    <NavLink to={"/carret"}>
      <div className={c.icon}>
        <img src={carretIcon} />
        <div className={c.itemsAmount}>{cartItemsAmount}</div>
      </div>
    </NavLink>
  );
};

export default CarretLink;
