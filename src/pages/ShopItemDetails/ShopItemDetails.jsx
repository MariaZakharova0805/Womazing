import React from "react";
import { useParams } from "react-router";
import uuid from "react-uuid";
import c from "./ShopItemDetails.module.css";
import { useItems } from "../../store/useStore";
import Container from "../../shared/Container/Container";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
import {
  setItemToCart,
  countCartNumber,
  countTotalPrice,
} from "../../utils/utils";

const ShopItemDetails = () => {
  const { name } = useParams();
  const {
    shopItems,
    chosenSize,
    setChosenSize,
    setCartItems,
    alert,
    setAlert,
    cartItems,
    setCartItemsAmount,
    setTotalPrice,
  } = useItems((state) => state);

  //Выбор размера, предупреждение
  const chooseSize = (size) => {
    setChosenSize(size);
    setAlert("");
  };

  //Обновление кол-ва товаров в
  React.useEffect(() => {
    countCartNumber(cartItems, setCartItemsAmount);
    countTotalPrice(cartItems, setTotalPrice);
  }, [cartItems]);

  const shownItem = shopItems.map((item) => {
    if (item.param === name) {
      return (
        <div className={c.shopItem} key={item.id}>
          <div className={c.shopItem_image}>
            <HeaderH1>{item.name}</HeaderH1>
            <img src={item.img}/>
          </div>
          <div className={c.shopItem_details}>
            <h2>{item.price}$</h2>
            <p>Размеры в наличии:</p>
            <div className={c.shopItem_details_sizes}>
              {item.sizes.map((size) => {
                return (
                  <button
                    onClick={() => {
                      chooseSize(size);
                    }}
                    className={
                      size == chosenSize ? c.size_btn_acive : c.size_btn
                    }
                    key={uuid()}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <p
              className={
                alert == "Размер товара не выбран!" ? c.redAlert : c.alert
              }
            >
              {alert}
            </p>

            <ButtonGreen
              onClick={() => {
                setItemToCart(
                  item,
                  chosenSize,
                  setCartItems,
                  setAlert,
                  cartItems,
                  setTotalPrice,
                  setCartItemsAmount
                );
              }}
            >
              Добавить в корзину
            </ButtonGreen>
          </div>
        </div>
      );
    }
  });

  return <Container>{shownItem}</Container>;
};

export default ShopItemDetails;
