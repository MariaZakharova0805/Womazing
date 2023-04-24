import React from "react";
import c from "./TableItem.module.css";
import cross from "../../../app/img/CarretImg/cross.svg";
import { useItems } from "../../../store/useStore";
import {
  deleteItem,
  countCartNumber,
  increaseCartItem,
  decreaseCartItem,
  countTotalPrice,
} from "../../../utils/utils";

const TableItem = ({ item }) => {
  const { cartItems, setCartItemsAmount, setTotalPrice } = useItems(
    (state) => state
  );

  return (
    <tr key={item.id} id={item.id} className={c.table_row}>
      <td className={c.cart_item}>
        <img
          className={c.delete}
          src={cross}
          onClick={() => {
            deleteItem(item, cartItems);
            countCartNumber(cartItems, setCartItemsAmount);
            countTotalPrice(cartItems, setTotalPrice);
          }}
        />
        <div className={c.cart_itemIMG}>
          <img src={item.img} alt={item.name} />
          <p className={c.item_name}>{item.name}</p>
        </div>
      </td>
      <td className={c.cart_item_details}>{item.size}</td>
      <td className={c.cart_item_details}>{item.price}$</td>
      <td className={c.cart_item_details}>
        <div className={c.cart_item_amount}>
          <div
            className="icon-up-open"
            onClick={() => {
              increaseCartItem(item, cartItems);
              countCartNumber(cartItems, setCartItemsAmount);
              countTotalPrice(cartItems, setTotalPrice);
            }}
          ></div>
          {item.amount}
          <div
            className="icon-down-open"
            onClick={() => {
              decreaseCartItem(item, cartItems);
              countCartNumber(cartItems, setCartItemsAmount);
              countTotalPrice(cartItems, setTotalPrice);
            }}
          ></div>
        </div>
      </td>
      <td className={c.cart_item_details}>{item.amount * item.price}$</td>
    </tr>
  );
};

export default TableItem;
