import React from "react";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import Container from "../../shared/Container/Container";
import { NavLink } from "react-router-dom";
import { useItems } from "../../store/useStore";

import TableItem from "./TableItem/TableItem";
import c from "./Carret.module.css";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
const Carret = () => {
  const { cartItems, totalPrice } = useItems((state) => state);
  
  let finalText;
  if (cartItems.length > 0) {
    finalText = <ButtonGreen>Оформить</ButtonGreen>;
  } else {
    finalText = "";
  }

  let cartContent;
  if (cartItems.length > 0) {
    cartContent = (
      <div>
        <table className={c.table}>
          <thead className={c.table_header}>
            <tr>
              <td className={c.table_headerFirst}>Товар</td>
              <td className={c.table_headers}>Р-р</td>
              <td className={c.table_headers}>Цена</td>
              <td className={c.table_headers}>Кол-во</td>
              <td className={c.table_headers}>Всего</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return <TableItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>
        <h3 className={c.header_h3}>Итого: {totalPrice}$</h3>
      </div>
    );
  } else {
    cartContent = (
      <div className={c.emptyCart}>
        <p className={c.emptyCart_text}>Корзина товаров пуста</p>
        <NavLink to={"/shop"}>
          <ButtonGreen>Открыть магазин</ButtonGreen>
        </NavLink>
      </div>
    );
  }

  return (
    <Container>
      <HeaderH1>Корзина товаров</HeaderH1>
      {cartContent}
      <div className={c.footer}>
        <NavLink to={"/carret/order"}>{finalText}</NavLink>
      </div>
    </Container>
  );
};
export default Carret;
