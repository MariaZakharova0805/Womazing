import React from "react";
import { useItems } from "../../../store/useStore";
import { Link } from "react-router-dom";
import c from "./Samples.module.css";
import HeaderSM from "../../../shared/Headers/HeaderH2";
import ShopItem from "../../../shared/ShopItem/ShopItem";

const Samples = () => {
  const shopItems = useItems((state) => state.shopItems);

  function getRandomImg(arr, n) {
    if (!n || arr.length < n) return null;
    const os = new Set();
    const a = [];
    do {
      const i = Math.trunc(Math.random() * arr.length);
      if (os.has(i)) continue;
      os.add(i);
      a.push(arr[i]);
    } while (os.size < n);
    return a;
  }

  const itemsList = getRandomImg(shopItems, 3).map((item) => {
    return (
      <Link key={item.id} to={`/shop/${item.param}`}>
        <ShopItem name={item.name} img={item.img} price={item.price} />
      </Link>
    );
  });

  return (
    <div className={c.samples}>
      <div className={c.header_h2}>
        <HeaderSM>Новая коллекция</HeaderSM>
      </div>
      <div className={c.img_block}>{itemsList}</div>
    </div>
  );
};

export default Samples;
