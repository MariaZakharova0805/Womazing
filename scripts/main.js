//Page 1
//Карусель текста First Section

let items = document.querySelectorAll(".firstSection_slider-item");
let textBoxes = document.querySelectorAll(".textBox");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((elem) =>
      elem.classList.remove("firstSection_slider-item-active")
    );
    let text = this.getAttribute("data-name");
    let textItem = document.getElementById(text);
    for (let box of textBoxes) {
      box.classList.add("hidden");
      setTimeout(function () {
        box.classList.add("visuallyhidden");
      }, 1);
    }
    textItem.classList.remove("hidden");
    setTimeout(function () {
      textItem.classList.remove("visuallyhidden");
    }, 1);
    this.classList.add("firstSection_slider-item-active");
  });
});

//Слайдер картинок "Команда мечты Fourth Section
let slideRight = document.querySelector(".fourthSection_slider-right");
let slideLeft = document.querySelector(".fourthSection_slider-left");

let slides = document.querySelectorAll(".slider_img");
let i = 0;
slideRight.addEventListener("click", () => {
  // Увеличиваем переменную i
  ++i;
  // Условие если переменная i больше или равна количеству слайдов
  if (i >= slides.length) {
    // Удаляем класс block предыдущему слайду
    setTimeout(function () {
      slides[2].classList.add("visuallyhidden");
    }, 1);
    slides[i - 1].classList.add("hidden");
    // Присваиваем переменной i ноль
    i = 0;
    // Добавляем класс block следующему слайду
    slides[i].classList.remove("hidden");
    setTimeout(function () {
      slides[i].classList.remove("visuallyhidden");
    }, 1);
  } else {
    // Иначе
    // Удаляем класс block предыдущему слайду
    setTimeout(function () {
      slides[i - 1].classList.add("visuallyhidden");
    }, 1);
    slides[i - 1].classList.add("hidden");
    // Добавляем класс block следующему слайду
    slides[i].classList.remove("hidden");
    setTimeout(function () {
      slides[i].classList.remove("visuallyhidden");
    }, 1);
   
  }
});
