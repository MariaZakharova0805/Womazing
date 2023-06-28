import { create } from "zustand";
import uuid from "react-uuid";

//МАГАЗИН и КОРЗИНА
export const useItems = create((set) => ({
  //сохаранение данных пользователя
  clienData: [],
  setClienData: (clientInfo, cartInfo, orderInfo) => {
    set((state) => ({
      clienData: [clientInfo, cartInfo, orderInfo],
    }));
  },

  //товары, добавленные в корзину
  cartItems: [],
  setCartItems: (item) => {
    set((state) => ({
      cartItems: [...state.cartItems, item],
    }));
  },
  clearCartItems: () => set({ cartItems: [] }),
  //кол-во товаров в корзине(для икноки)
  cartItemsAmount: 0,
  setCartItemsAmount: (number) => {
    set((state) => ({
      cartItemsAmount: number,
    }));
  },
  clearCartItemsAmount: () => set({ cartItemsAmount: 0 }),

  //Итогова стоимость корзины
  totalPrice: 0,
  setTotalPrice: (number) => {
    set((state) => ({
      totalPrice: number,
    }));
  },

  //Предупреждение о невыбранном размере
  //Если размер не выбран, то товар в корзину не добавляется
  alert: "Выберете размер товара",
  setAlert: (message) => {
    set((state) => ({
      alert: message,
    }));
  },

  //фильтрация элементов магазина по категоряим
  //данные для кнопок категорий
  categories: [
    { id: uuid(), name: "all", text: "все" },
    { id: uuid(), name: "jacket", text: "пальто" },
    { id: uuid(), name: "sweetshirt", text: "толстовки" },
    { id: uuid(), name: "t-shirt", text: "футболки" },
    { id: uuid(), name: "swimmingsuit", text: "купальники" },
  ],
  //активная категория
  category: "all",
  setCategory: (data) => {
    set((state) => ({
      category: data,
    }));
  },
  //кнопки размеров
  //chosenSize становится
  // одинаковым после выбора для всех shopItmes
  chosenSize: "",
  setChosenSize: (size) => {
    set((state) => ({
      chosenSize: size,
    }));
  },

  //все товары
  shopItems: [
    {
      name: "Куртка вилюр",
      param: "vilyurs_jacket",
      img: "../img/clothes/jacket_brown.png",
      price: 300,
      avalableAmount: 10,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Пальто серое",
      param: "coat_gray",
      img: "../img/clothes/jacket_grey.png",
      price: 300,
      avalableAmount: 10,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлено",
    },
    {
      name: "Куртка джинсовая",
      param: "denim_jacket",
      img: "../img/clothes/jacket_jeans.png",
      price: 300,
      avalableAmount: 10,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Куртка кожанная",
      param: "leather_jacket",
      img: "../img/clothes/jacket_leather.png",
      price: 300,
      avalableAmount: 10,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Пальто розовое",
      param: "jacket_pink",
      img: "../img/clothes/jacket_pink.png",
      price: 300,
      avalableAmount: 20,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлено",
    },
    {
      name: "Пальто белое",
      param: "jacket_white",
      img: "../img/clothes/jacket_white.png",
      price: 300,
      avalableAmount: 10,
      category: "jacket",
      sizes: ["S", "M", "L"],
      id: uuid(),
    },
    {
      name: "Толстовка Авокадо",
      param: "sweetshot_green",
      img: "../img/clothes/SweetShot_green.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Кардиган вязанный",
      param: "sweetshot_grey",
      img: "../img/clothes/SweetShot_grey.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлен",
    },
    {
      name: "Кофта LOVE",
      param: "sweetshot_love",
      img: "../img/clothes/SweetShot_love.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Кофта Персик",
      param: "sweetshot_peach",
      img: "../img/clothes/SweetShot_peach.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Кофта розовая",
      param: "sweetshot_pink",
      img: "../img/clothes/SweetShot_pink.png",
      price: 200,
      category: "sweetshirt",
      avalableAmount: 10,
      sizes: ["M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Кофта Пурпур",
      param: "sweetshot_purple",
      img: "../img/clothes/SweetShot_purple.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Кофта полосатая",
      param: "sweetshot_stiped",
      img: "../img/clothes/SweetShot_stiped.png",
      price: 200,
      avalableAmount: 10,
      category: "sweetshirt",
      sizes: ["M"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Купальник Avocado",
      param: "swimmingsuit_avocado",
      img: "../img/clothes/swimmingSuit_Avocado.png",
      price: 120,
      avalableAmount: 10,
      category: "swimmingsuit",
      sizes: ["S", "L"],
      id: uuid(),
      carretText: "добавлен",
    },
    {
      name: "Купальник Glow",
      param: "swimmingsuit_glow",
      img: "../img/clothes/swimmingSuit_Glow.png",
      price: 120,
      avalableAmount: 10,
      category: "swimmingsuit",
      sizes: ["M", "L"],
      id: uuid(),
      carretText: "добавлен",
    },
    {
      name: "Купальник Elegant",
      param: "swimmingsuit_white",
      img: "../img/clothes/swimmingSuit_white.png",
      price: 120,
      avalableAmount: 10,
      category: "swimmingsuit",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлен",
    },
    {
      name: "Футболка Black",
      param: "t-shirt_black",
      img: "../img/clothes/t-shirT_black.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Футболка Dotted",
      param: "t-shirt_dotted",
      img: "../img/clothes/t-shirt_dotted.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Футболка Knit",
      param: "t-shirt_nitted",
      img: "../img/clothes/t-shirt_nitted.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "M", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Майка RED",
      param: "t-shirt_red",
      img: "../img/clothes/t-shirt_red.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "M", "L", "XL"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Футболка USA",
      param: "t-shirt_usa",
      img: "../img/clothes/t-shirt_USA.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "L"],
      id: uuid(),
      carretText: "добавлена",
    },
    {
      name: "Футболка Addicted",
      param: "t-shirt_addicted",
      img: "../img/clothes/t-shirt_addicted.png",
      price: 180,
      avalableAmount: 10,
      category: "t-shirt",
      sizes: ["S", "M"],
      id: uuid(),
      carretText: "добавлена",
    },
  ],
}));

//ДАННЫЕ ДЛЯ СТРАНИЦЫ /home "Главная"
export const useHomeData = create((set) => ({
  //слайдер с текстами(верх страницы)
  shownText: {
    id: 1,
    header: "Включай новый сезон с WOMAZING.",
    text: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров.",
    active: true,
  },
  setShowText: (text) => {
    set((state) => ({
      shownText: text,
    }));
  },

  //Слайдер Команда мечты
  fadeImg: { id: 1, src: "../img/TeamImg/image_one.png" },
  setFadeImg: (image) => {
    set((state) => ({
      fadeImg: image,
    }));
  },

  //слоганы на первой странице "Что для нас важно"
  descriptions: [
    {
      id: uuid(),
      img: "./img/SloganImg/quality.png",
      header: "Качество",
      text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
    },
    {
      id: uuid(),
      img: "./img/SloganImg/speed.png",
      header: "Скорость",
      text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
    },
    {
      id: uuid(),
      img: "./img/SloganImg/hand.png",
      header: "Ответственность",
      text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
    },
  ],
}));

//ДАННЫЕ ДЛЯ СТРАНИЦЫ /home "Главная"
//Alert для feddBackForm
export const useAlert = create((set) => ({
  visible: false,
  setVisible: (prop) => {
    set((state) => ({
      visible: prop,
    }));
  },
}));

//Alert ok(подтверждение отправки формы)
export const useThankyouAlert = create((set) => ({
  visible: false,
  setVisible: (prop) => {
    set((state) => ({
      visible: prop,
    }));
  },
}));

export const useFeedBack = create((set) => ({
  feedBackData: [],
  setFeedBackData: (formData, techData) => {
    set((state) => ({
      feedBackData: [formData, techData],
    }));
  },

  showNotification: false,
  setShowNotificationTrue: () => set({ showNotification: true }),
  setShowNotificationFalse: () => set({ showNotification: false }),
}));