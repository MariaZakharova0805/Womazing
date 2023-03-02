//ФОРМА ОБРАТНОЙ СВЯЗИ
let feedbackButton = document.querySelectorAll(".feedback_button");
let orderButton = document.querySelector(".order-button");
let finishButton = document.querySelector(".finish-order");
let nav = document.querySelector(".nav");
let navAfter = document.querySelector(".nav_after");

// при клике на телефон в header открывается окно обратной связи

for (let btn of feedbackButton) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
  });
}

window.addEventListener("click", (e) => {
  // при клике в любом месте окна браузера
  let target = e.target;
  if (
    !target.closest(".nav") &&
    !target.closest(".feedback_button") &&
    !target.closest(".custom_alert")
  ) {
    // если этот элемент или его родительские элементы не окно навигации и не кнопка
    nav.classList.remove("nav_active"); // то закрываем окно навигации, удаляя активный класс
  }
});

//Объект с данными клиента для обратной связи, здесь будут данные из заполненной формы
let clientFeedBackData = new Object();

//Кастомный customAlert, если формы заполнены не корректно
let custimAlert = document.querySelector(".custom_alert");
let closeAlert = document.querySelector(".сlose_alert");
closeAlert.addEventListener("click", () => {
  custimAlert.classList.remove("custom_alert-active");
});

//Валидация форм
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let phone = document.querySelector("#number");
let TEL_REGEXP = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
let nameOK = false;
let emailOK = false;
let phoneOK = false;

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function isPhoneValid(value) {
  return TEL_REGEXP.test(value);
}

function onInputEmail() {
  if (isEmailValid(email.value)) {
    email.style.borderColor = "black";
    email.style.color = "grey";
    emailOK = true;
  } else {
    email.style.borderColor = "red";
    email.style.color = "red";
    emailOK = false;
  }
}

function onInputPhone() {
  if (isPhoneValid(phone.value)) {
    phone.style.borderColor = "black";
    phone.style.color = "grey";
    phoneOK = true;
  } else {
    phone.style.borderColor = "red";
    phone.style.color = "red";
    phoneOK = false;
  }
}

function onInputName() {
  if (userName.value.length > 0) {
    userName.style.borderColor = "black";
    userName.style.color = "grey";
    nameOK = true;
  } else {
    userName.style.borderColor = "red";
    userName.style.color = "red";
    nameOK = false;
  }
}

email.addEventListener("input", onInputEmail);
phone.addEventListener("input", onInputPhone);
userName.addEventListener("input", onInputName);

//Клиент нажал "Заказать звонок"
orderButton.addEventListener("click", () => {
  if (nameOK == true && phoneOK == true && nameOK == true) {
    nav.classList.remove("nav_active");
    navAfter.classList.add("nav_after-active");
    //Помещаем данные в объект для передачи
    clientFeedBackData.name = userName.value;
    clientFeedBackData.email = email.value;
    clientFeedBackData.phone = phone.value;
    //Очищаем форму
    email.value = "";
    phone.value = "";
    userName.value = "";
    nameOK = false;
    emailOK = false;
    phoneOK = false;
  } else {
    custimAlert.classList.add("custom_alert-active");
  }
});

//Форма уведомляет, что данные отправлены
finishButton.addEventListener("click", () => {
  navAfter.classList.remove("nav_after-active");
});

//ПЕРЕКЛЮЧЕНИЕ МЕЖДУ СТРАНИЦАМИ САЙТА
let about_page = document.querySelector(".about_page");
let cart_page = document.querySelector(".cart_page");
let main_page = document.querySelector(".main_page");
let shop_page = document.querySelector(".shop_page ");
let contact_page = document.querySelector(".contact_page");

let pages = document.querySelectorAll(".page");

let parent = document.querySelector(".links_container");
let menuItem = parent.querySelectorAll(".page_links");

parent.addEventListener("click", (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;

  // Проверяем тот ли это элемент который нам нужен
  if (target.classList.contains("page_links")) {
    for (let i = 0; i < menuItem.length; i++) {
      // Убираем у других
      menuItem[i].classList.remove("active-link");
    }
    // Добавляем тому на который нажали
    target.classList.add("active-link");
    let activePage = document.querySelector("." + target.dataset.link);

    for (let page of pages) {
      page.classList.add("hiddenSection");
    }
    activePage.classList.remove("hiddenSection");

    //выходим из карточки товара
    shopSection.classList.remove("hidden");
    itemSection.classList.add("hidden");
    let itemSizes = document.querySelector(".item_sizes");
    itemSizes.innerHTML = "";
    cart_notes.innerHTML = '';
  }
});

let goTo_mainPage = document.querySelectorAll(".goTo_mainPage");
for (let btn of goTo_mainPage) {
  btn.addEventListener("click", () => {
    for (let page of pages) {
      page.classList.add("hiddenSection");
    }
    for (let item of menuItem) {
      item.classList.remove("active-link");
    }
    let activeLink = document.querySelector("a[data-link=main_page]");
    activeLink.classList.add("active-link");

    main_page.classList.remove("hiddenSection");

    //выходим из карточки товара
    shopSection.classList.remove("hidden");
    itemSection.classList.add("hidden");
    let itemSizes = document.querySelector(".item_sizes");
    itemSizes.innerHTML = "";
    cart_notes.innerHTML = '';
  });
}

//перейти в корзину по щелчку на иконке в header
let goToCart = document.querySelector(".goToCart");
goToCart.addEventListener("click", () => {
  for (let page of pages) {
    page.classList.add("hiddenSection");
  }
  for (let item of menuItem) {
    item.classList.remove("active-link");
  }
  cart_page.classList.remove("hiddenSection");
});

//перейти на страницу "О бренде" по щелчку на ссалку внизу главной страницы
let goTo_aboutPage = document.querySelector(".goTo_aboutPage");
goTo_aboutPage.addEventListener("click", () => {
  for (let page of pages) {
    page.classList.add("hiddenSection");
  }
  for (let item of menuItem) {
    item.classList.remove("active-link");
  }
  about_page.classList.remove("hiddenSection");
  let activeLink = document.querySelector("a[data-link=about_page]");
  activeLink.classList.add("active-link");
});

//перейти в магазин
let goTo_shopPage = document.querySelectorAll(".goTo_shopPage");
for (let btn of goTo_shopPage) {
  btn.addEventListener("click", () => {
    for (let page of pages) {
      page.classList.add("hiddenSection");
    }
    for (let item of menuItem) {
      item.classList.remove("active-link");
    }
    let activeLink = document.querySelector("a[data-link=shop_page]");
    activeLink.classList.add("active-link");

    shop_page.classList.remove("hiddenSection");
  });
}

