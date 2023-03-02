//ВСЕ ТОВАРЫ МАГАЗИНА
let shopItems = [
  //куртки
  {
    name: "Куртка вилюр",
    img: "./components/img/clothes/jacket_brown.png",
    price: 300,
    amount: 1,
    avalableAmount: 10,
    category: "jacket",
    size: ["S", "M", "L"],
    id: 0,
  },
  {
    name: "Пальто серое",
    img: "./components/img/clothes/jacket_grey.png",
    price: 300,
    amount: 1,
    avalableAmount: 10,
    category: "jacket",
    size: ["S", "M", "L"],
    id: 1,
  },
  {
    name: "Куртка джинсовая",
    img: "./components/img/clothes/jacket_jeans.png",
    price: 300,
    amount: 1,
    avalableAmount: 10,

    category: "jacket",
    size: ["S", "M", "L"],
    id: 2,
  },
  {
    name: "Куртка кожанная",
    img: "./components/img/clothes/jacket_leather.png",
    price: 300,
    amount: 1,
    avalableAmount: 10,

    category: "jacket",
    size: ["S", "M", "L"],
    id: 3,
  },
  {
    name: "Пальто розовое",
    img: "./components/img/clothes/jacket_pink.png",
    price: 300,
    amount: 1,
    avalableAmount: 20,
    category: "jacket",
    size: ["S", "M", "L"],
    id: 4,
  },
  {
    name: "Пальто белое",
    img: "./components/img/clothes/jacket_white.png",
    price: 300,
    amount: 1,
    avalableAmount: 10,

    category: "jacket",
    size: ["S", "M", "L"],
    id: 5,
  },
  //кофты
  {
    name: "Толстовка Авокадо",
    img: "./components/img/clothes/SweetShot_green.png",
    price: 200,
    amount: 1,
    avalableAmount: 10,

    category: "sweetshirt",
    size: ["S", "M", "L"],
    id: 6,
  },
  {
    name: "Кардиган вязанный",
    img: "./components/img/clothes/SweetShot_grey.png",
    price: 200,
    amount: 1,
    avalableAmount: 10,

    category: "sweetshirt",
    size: ["S", "M", "L"],
    id: 8,
  },
  {
    name: "Кофта LOVE",
    img: "./components/img/clothes/SweetShot_love.png",
    price: 200,
    amount: 1,
    avalableAmount: 10,

    category: "sweetshirt",
    size: ["S", "M", "L"],
    id: 9,
  },
  {
    name: "Кофта Персик",
    img: "./components/img/clothes/SweetShot_peach.png",
    price: 200,
    amount: 1,
    category: "sweetshirt",
    size: ["S", "M", "L"],
    id: 10,
  },
  {
    name: "Кофта розовая",
    img: "./components/img/clothes/SweetShot_pink.png",
    price: 200,
    amount: 1,
    category: "sweetshirt",
    size: ["M", "L"],
    id: 11,
  },
  {
    name: "Кофта Пурпур",
    img: "./components/img/clothes/SweetShot_purple.png",
    price: 200,
    amount: 1,
    category: "sweetshirt",
    size: ["S", "M", "L"],
    id: 12,
  },
  {
    name: "Кофта полосатая",
    img: "./components/img/clothes/SweetShot_stiped.png",
    price: 200,
    amount: 1,
    category: "sweetshirt",
    size: ["M"],
    id: 13,
  },
  //Купальники
  {
    name: "Купальник Avocado",
    img: "./components/img/clothes/swimmingSuit_Avocado.png",
    price: 120,
    amount: 1,
    category: "swimmingsuit",
    size: ["S", "L"],
    id: 14,
  },
  {
    name: "Купальник Glow",
    img: "./components/img/clothes/swimmingSuit_Glow.png",
    price: 120,
    amount: 1,
    category: "swimmingsuit",
    size: ["M", "L"],
    id: 15,
  },
  {
    name: "Купальник Elegant",
    img: "./components/img/clothes/swimmingSuit_white.png",
    price: 120,
    amount: 1,
    category: "swimmingsuit",
    size: ["S", "M", "L"],
    id: 16,
  },
  //Футболки
  {
    name: "Футболка Black",
    img: "./components/img/clothes/t-shirT_black.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "M", "L"],
    id: 17,
  },
  {
    name: "Футболка Dotted",
    img: "./components/img/clothes/t-shirt_dotted.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "M", "L"],
    id: 18,
  },
  {
    name: "Футболка Knit",
    img: "./components/img/clothes/t-shirt_nitted.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "M", "L"],
    id: 19,
  },
  {
    name: "Майка RED",
    img: "./components/img/clothes/t-shirt_red.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "M", "L"],
    id: 20,
  },
  {
    name: "Футболка USA",
    img: "./components/img/clothes/t-shirt_USA.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "L"],
    id: 21,
  },
  {
    name: "Футболка Addicted",
    img: "./components/img/clothes/t-shirt_addicted.png",
    price: 180,
    amount: 1,
    category: "t-shirt",
    size: ["S", "M"],
    id: 22,
  },
];

//Сортируем массив объектов в алфавитном порядке shopItems.name
shopItems.sort((a, b) => (a.name > b.name ? 1 : -1));

//Элементы в корзина
let cartItems = [];

//Гененрируем страницу магазина из массива shopItems
let shop_container = document.querySelector(".shop_container");
let show_all = document.querySelector(".show_all");
let shopSection = document.querySelector(".shopSection");
let itemSection = document.querySelector(".itemSection");

//Отображаем элементы изначально без сортировки
for (let item of shopItems) {
  let shopItem = document.createElement("div");
  generateShopPage(shopItem, item);
}

//Кнопки для отображения различных товаров
let filter_buttons = document.querySelectorAll(".filter_button");
for (let btn of filter_buttons) {
  btn.addEventListener("click", () => {
    for (let btn of filter_buttons) {
      btn.classList.remove("black_button-active");
    }
    btn.classList.add("black_button-active");
    shop_container.innerHTML = "";
    for (let item of shopItems) {
      //отображаем товары, которые соответвуют категории в data-filter
      if (btn.dataset.filter == item.category) {
        let shopItem = document.createElement("div");
        generateShopPage(shopItem, item);
        //отображаем все товары
      } else if (btn.dataset.filter == "all") {
        let shopItem = document.createElement("div");
        generateShopPage(shopItem, item);
      }
    }
  });
}

//Функция для отображения объекта с товарами на страницу
function generateShopPage(shopItem, item) {
  shopItem.classList.add("shop_item");
  shopItem.classList.add("secondSection_item");
  shopItem.innerHTML =
    '<a href="#" class="item_image-link"><img class="item_item-img" src=' +
    item.img +
    ' alt="t-shirt"/></a><h4 class="header_h4">' +
    item.name +
    '</h4><p class="price_text">' +
    item.price +
    "$" +
    "</p>";
  watchItem(shopItem, item);
  shop_container.appendChild(shopItem);
}

let chosenItem;
//функция для открытие конкретной страницы товара
function watchItem(shopItem, item) {
  shopItem.addEventListener("click", () => {
    chosenItem = item;
    shopSection.classList.add("hidden");
    itemSection.classList.remove("hidden");

    //имя товара
    let itemName = document.querySelectorAll(".item_name");
    for (let name of itemName) {
      name.innerHTML = chosenItem.name;
    }
    //цена товара за штуку
    let itemPrice = document.querySelector(".item_price");
    itemPrice.innerHTML = chosenItem.price + "$";

    //Отображаем размеры товара в наличии
    let itemSizes = document.querySelector(".item_sizes");
    for (let size of item.size) {
      let oneSize = document.createElement("div");
      oneSize.classList.add("black_button");
      oneSize.classList.add('item_size');
      oneSize.innerHTML = size;
      itemSizes.appendChild(oneSize);
    }

    //выбор размера пользователем
    let item_sizes = document.querySelectorAll(".item_size");
    for (let item_size of item_sizes) {
      item_size.addEventListener("click", () => {
        item_sizes.forEach((item_size) =>
          item_size.classList.remove("black_button-active")
        );
        item_size.classList.add("black_button-active");
        chosenItem.size = item_size.innerHTML;
      });
    }
    //фото товара
    let item_IMG = document.querySelector(".item_IMG");
    item_IMG.src = item.img;

    return chosenItem;
  });
}

//добавления товара в корзину
let push_toCart = document.querySelector(".push_toCart");
let cart_notes = document.querySelector(".cart_notes");

push_toCart.addEventListener("click", () => {
  if (chosenItem.size.length == 1) {
    cartItems.push(chosenItem);
    cart_notes.innerHTML = "Товар добавлен в корзину";
    createCart();
  } else {
    cart_notes.innerHTML = "Выберете размер товара";
  }
});

//Выход из карточки товара
let goBackTo_shopPage = document.querySelector(".goBackTo_shopPage");
goBackTo_shopPage.addEventListener("click", () => {
  shopSection.classList.remove("hidden");
  itemSection.classList.add("hidden");
  let itemSizes = document.querySelector(".item_sizes");
  itemSizes.innerHTML = "";
  cart_notes.innerHTML = "";
});

//Изменяем цифру на значке корзины на актуальное кол-во товаров там
function ChangeCartNumber() {
  let itemsAmount = document.querySelector(".shop_cart-item-amount");
  itemsAmount.innerHTML = cartItems.length;
}
ChangeCartNumber();

//Генерируем корзину из массива cartItems
let table = document.getElementById("cart_table");

//сумма всех покупок в корзине с учетом их кол-ва
let resultPrice = document.querySelector(".result_number");

//сумма всех покупок на странице с оплатой
let cart_resultPrice = document.querySelector(".cart_resultPrice");

//Функция содает корзину(таблицу) покупок
function createCart() {
  table.innerHTML = "";
  let thead = document.createElement("thead");
  thead.innerHTML =
    '<th class="header_h4 cart_name">Товар</th><th class="header_h4 cart_size">Размер</th><th class="header_h4 cart_price">Цена</th><th class="header_h4 cart_amount">Кол-во</th><th class="header_h4 cart_totalAmount">Всего</th>';
  thead.classList.add("cart_table-header");

  table.appendChild(thead);
  for (let item of cartItems) {
    let tr = document.createElement("tr");
    //1ая ячейка с фото и названием товара, а также с кнопкой удаления
    let td1 = document.createElement("td");
    td1.innerHTML =
      ' <img src="./components/img/cross.svg" alt="delete_item" class="deleteRow"/><div class="cart-item"><img src=' +
      item.img +
      '> <p class="regular_text">' +
      item.name +
      "</p></div>";
    td1.classList.add("cart_item-description");
    tr.appendChild(td1);

    //2ая ячейка с размером товара
    let td0 = document.createElement("td");
    td0.textContent = chosenItem.size;
    tr.appendChild(td0);

    //2ая ячейка с центой товара
    let td2 = document.createElement("td");
    td2.textContent = item.price + "$";
    tr.appendChild(td2);

    //3яя ячейка с кол-вом товара(изменяется пользователем),
    //можно ввести только цифры
    let td3 = document.createElement("td");
    let NewInput = document.createElement("input");
    NewInput.classList.add("cart_item-amount");
    NewInput.placeholder = item.amount;
    NewInput.type = "number";
    NewInput.min = "1";
    NewInput.max = "10";
    NewInput.oninput = function () {
      td4.innerHTML = NewInput.value * item.price + "$";
      item.amount = NewInput.value * item.price;
      item.amount = NewInput.value;
      console.log(item);
      changeTotalPrice();
    };
    td3.appendChild(NewInput);
    tr.appendChild(td3);

    //4ая ячейка, полная стоимость, изменяется динамически,
    //с учетом кол-во выбранного пользователем товара
    let td4 = document.createElement("td");
    td4.textContent = item.price * item.amount + "$";

    td4.classList.add("totalItemPrice");
    tr.appendChild(td4);
    table.appendChild(tr);
    ChangeCartNumber();
    changeTotalPrice();
  }
  //складываем изначально сумму значений price из объекта
  changeTotalPrice();
}

// Удаление элементов из корзины по крестику в 1ой ячейке
table.addEventListener("click", function (evt) {
  if (evt.target.closest(".deleteRow")) {
    //удаляем из объекта cartItems этот элемент
    let index = evt.target.closest("tr").rowIndex - 1;
    cartItems.splice(index, 1);
    //удаляем элемент из таблицы визуально
    evt.target.closest("tr").remove();
    changeTotalPrice();
  }
});

//Пересчитываем цену всех товаров с учетом их кол-ва
function changeTotalPrice() {
  let arr = [];
  for (let item of cartItems) {
    let res = item.price * item.amount;
    arr.push(res);
  }
  resultPrice.innerHTML = arr.reduce((a, b) => a + b, 0) + "$";
}
changeTotalPrice();

//Заказ товара при наличии товаров в корзине
let cartSection = document.querySelector(".cartSection");
let cartOrder = document.querySelector(".cartOrder");
let make_order = document.querySelector(".make_order");
let goBackToCart = document.querySelector(".goBackToCart");

make_order.addEventListener("click", () => {
  cart_resultPrice.innerHTML = resultPrice.innerHTML;
  if (cartItems.length > 0) {
    cartSection.classList.add("hiddenSection");
    cartOrder.classList.remove("hiddenSection");
    cart_resultPrice.innerHTML = resultPrice.innerHTML;
  }
});

//Возврат к корзине товаров из страницы оформления покупки
goBackToCart.addEventListener("click", () => {
  cartSection.classList.remove("hiddenSection");
  cartOrder.classList.add("hiddenSection");
});

//Оформление заказа
// cart_name
// cart_email
// cart_phone

// function isEmailValid(value) {
//   return EMAIL_REGEXP.test(value);
// }

// function isPhoneValid(value) {
//   return TEL_REGEXP.test(value);
// }

// function onInputEmail() {
//   if (isEmailValid(email.value)) {
//     email.style.borderColor = "black";
//     email.style.color = "grey";
//     emailOK = true;
//   } else {
//     email.style.borderColor = "red";
//     email.style.color = "red";
//     emailOK = false;
//   }
// }

// function onInputPhone() {
//   if (isPhoneValid(phone.value)) {
//     phone.style.borderColor = "black";
//     phone.style.color = "grey";
//     phoneOK = true;
//   } else {
//     phone.style.borderColor = "red";
//     phone.style.color = "red";
//     phoneOK = false;
//   }
// }

// function onInputName() {
//   if (userName.value.length > 0) {
//     userName.style.borderColor = "black";
//     userName.style.color = "grey";
//     nameOK = true;
//   } else {
//     userName.style.borderColor = "red";
//     userName.style.color = "red";
//     nameOK = false;
//   }
// }

//Отображает на главной странице 3 рандомных товара из объекта товаров

// let firstPageItems = [];
// for (let i = 0; i < 3; i++) {
//   const randomIndex = Math.floor(Math.random() * (shopItems.length - 1));
//   const result = shopItems[randomIndex];
//   firstPageItems.push(result);
// }
// console.log(firstPageItems);
