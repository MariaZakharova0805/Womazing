let cartSection = document.querySelector(".cartSection");
let cartOrder = document.querySelector(".cartOrder");
let make_order = document.querySelector(".make_order");
let goBackToCart = document.querySelector('.goBackToCart');

make_order.addEventListener("click", () => {
  cartSection.classList.add("hidden");
  cartOrder.classList.remove("hidden");
});
goBackToCart.addEventListener("click", () => {
    cartSection.classList.remove("hidden");
    cartOrder.classList.add("hidden");
  });