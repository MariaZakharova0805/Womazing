import React from "react";
import classes from "./CartLink.module.css";
import bag from "../../img/ShopCart.svg";

const CartLink = () => {
  return (
    <div className={classes.goToCart}>
      <a href="#">
        <img src={bag} alt="Shop_Cart" className={classes.img}/>
        <span className={classes.itemsInCart}>0</span>
      </a>
    </div>
  );
};

export default CartLink;
