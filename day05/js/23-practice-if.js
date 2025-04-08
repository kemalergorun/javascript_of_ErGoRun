// DOM Elements
const priceEl = document.querySelector("#price");
const discountedPriceEl = document.querySelector("p.discountedPrice");

// Manipulation
function calculatePrice() {
  let price = +priceEl.value;
  // since the price is a string, we might need to convert it to a number. But in the following example with comparison operators, if one of them is number the other is a string, the string will be converted to a number automatically. If it cannot be converted, it will be NaN

  let message = "PRICE: ";

  if (price > 500) {
    // price = price - (price * 10) / 100
    // price -= price * 10 / 100;
    // price -= price * .1;
    price *= 0.9;
    message = "DISCOUNT IS APPLIED! DISCOUNTED PRICE:";
    discountedPriceEl.classList.add("text-success");
  }

  // price = price.toFixed(2);
  discountedPriceEl.innerText = `${message} ${price.toFixed(2)}`;

  // clear input
  priceEl.value = "";
}
