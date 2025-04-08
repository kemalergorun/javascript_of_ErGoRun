// DOM Elements
const priceEl = document.querySelector("#price");
const resultEl = document.querySelector("p.para");

// Manipulation
function calculatePrice() {
  let price = +priceEl.value; // Need to make it number for arithmetic operations

  if (price > 500) {
    price *= 0.9;
  } else if (price > 300) {
    price *= 0.93;
  } else {
    price *= 0.95;
  }

  resultEl.innerText = `Total payment ${Math.round(price)}$`;

  // clear input
  priceEl.value = "";
}
