// DOM Elements
const inputEl = document.querySelector("#price");
const outputEl = document.querySelector(".output");

// Manipulation
function calculate() {
  let price = +inputEl.value;

  // true === (price > 1500)

  switch (true) {
    case price > 1500:
      price *= 0.85;
      break;
    case price > 700:
      price *= 0.87;
      break;
    case price > 500:
      price *= 0.9;
      break;
    case price > 300:
      price *= 0.95;
      break;
    default:
      price *= 0.98;
      break;
  }

  outputEl.innerText = `The final price is ${price}$`;
  inputEl.value = "";


}