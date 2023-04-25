import React from "react";
import c from "./ShopItem.module.css";

const ShopItem = (props) => {
  return (
    <div key={props.id} id={props.id} className={c.shop_item}>
      <div className={c.imageLink}>
        <div className={c.bg}>
          <img className={c.shop_item_IMG} src={props.img} alt={props.name}/>
        </div>
      </div>
      <h4 className={c.header_h4}>{props.name}</h4>
      <p className={c.price_text}>{props.price}$</p>
    </div>
  );
};
export default ShopItem;
