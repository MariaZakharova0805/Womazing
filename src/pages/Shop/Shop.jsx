import React from "react";
import { Link } from "react-router-dom";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import Container from "../../shared/Container/Container";
import { useItems } from "../../store/useStore";
import ShopItem from "../../shared/ShopItem/ShopItem";
import c from "./Shop.module.css";

const Shop = () => {
  const { shopItems, categories, category, setCategory, setAlert } = useItems(
    (state) => state
  );

  const setButtonActive = (cat) => {
    setCategory(cat);
  };

  const itemsList = shopItems.map((item) => {
    if (category === "all") {
      return (
        <Link
          key={item.id}
          to={`/shop/${item.param}`}
          onClick={() => setAlert("Выберете размер товара")}
        >
          <ShopItem name={item.name} img={item.img} price={item.price} />
        </Link>
      );
    } else if (item.category === category) {
      return (
        <Link key={item.id} to={`/shop/${item.param}`}>
          <ShopItem name={item.name} img={item.img} price={item.price} />
        </Link>
      );
    }
  });

  return (
    <Container>
      <HeaderH1>Магазин</HeaderH1>
      <div className={c.buttons}>
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                setButtonActive(cat.name);
              }}
              className={cat.name == category ? c.button_active : c.button}
              key={cat.id}
            >
              {cat.text}
            </button>
          );
        })}
      </div>

      <div className={c.container}>{itemsList}</div>
    </Container>
  );
};

export default Shop;
