// DOM Elements
const priceEl = document.querySelector("#price");
const outputEl = document.querySelector("#output");

// Manipulation
function calculatePrice() {
  let price = +priceEl.value;

  // Validation
  if (price < 0) {
    outputEl.innerText = "You cannot buy less than 0";
    outputEl.classList.add("alert", "alert-danger");
    return;
  }

  if (price > 500) {
    price *= 0.9; // 10% discount
  } else {
    price *= 0.95; // 5% discount
  }

  outputEl.innerText = `Discounted price: ${price.toFixed(3)}`;

  // clear input
  priceEl.value = "";
}
