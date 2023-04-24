//Подсчет числа товаров в корзине(для икноки корзины)
export function countCartNumber(cartItems, setCartItemsAmount) {
  const result = cartItems.reduce((a, b) => a + b.amount, 0);
  setCartItemsAmount(result);
}

//Подсчет общей стоимости карзины
export function countTotalPrice(cartItems, setTotalPrice) {
  const result = cartItems.reduce((a, b) => a + b.amount * b.price, 0);
  setTotalPrice(result);
}

//Увеличение amount повторяющихся эл-ов вместо добавления их в корзину повторно
function filterSameItems(
  cartItems,
  setCartItems,
  newItemInCart,
  setTotalPrice,
  setCartItemsAmount
) {
  const names = cartItems.map((el) => el.id);
  if (names.includes(newItemInCart.id)) {
    cartItems.map((el) => {
      if (el.id === newItemInCart.id) {
        el.amount++;
      }
    });
  } else {
    setCartItems(newItemInCart);
  }
  countCartNumber(cartItems, setCartItemsAmount);
  countTotalPrice(cartItems, setTotalPrice);
}

//добавление товара в корзину и изменение текста о добавлении размера
export function setItemToCart(
  item,
  chosenSize,
  setCartItems,
  setAlert,
  cartItems,
  setTotalPrice,
  setCartItemsAmount
) {
  let newItemInCart = {};
  newItemInCart.id = item.id + chosenSize; //уникальный id для carret
  newItemInCart.name = item.name;
  newItemInCart.price = item.price;
  newItemInCart.img = item.img;
  newItemInCart.size = chosenSize;
  newItemInCart.amount = 1;

  if (chosenSize) {
    filterSameItems(
      cartItems,
      setCartItems,
      newItemInCart,
      setTotalPrice,
      setCartItemsAmount
    );
    setAlert(
      `"${item.name}", размер ${chosenSize} ${item.carretText} в корзину`
    );
  } else {
    setAlert("Размер товара не выбран!");
  }
}

//удаление товара из корзины
export function deleteItem(item, cartItems) {
  let index = cartItems.map((el) => el.id).indexOf(item.id);
  cartItems.splice(index, 1);
}

//уменьшение кол-ва amount эл-та в корзине
export function decreaseCartItem(item, cartItems) {
  cartItems.map((el) => {
    if (el.id === item.id && item.amount > 0) {
      item.amount--;
      if (item.amount === 0) {
        deleteItem(item, cartItems);
      }
    }
  });
}

//Увеличение кол-ва amount эл-та в корзине
export function increaseCartItem(item, cartItems) {
  cartItems.map((el) => {
    if (el.id === item.id && item.amount > 0) {
      item.amount++;
    }
  });
}

//Создаем дату заказа для отправки формы на почту
export function formOrderData() {
  let today = new Date();
  return today.toLocaleString();
}

//Создаем JSON sting из массива объектов заказа для отправки формы на почту
export function formOrderJSON(cartItems) {
  let orderJSON = "";
  for (let elem of cartItems) {
    orderJSON += JSON.stringify(elem);
  }
  return orderJSON;
}

