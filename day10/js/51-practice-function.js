// DOM Elements
const inputEl = document.querySelector("#price");
const resultEl = document.querySelector("#result");

// Functions
const getPrice = (price, discountRate = 0, taxRate = 0) => {
  if (price < 0) return "Price cannot be negative.";

  if (price > 1500) {
    discountRate += 10;
    taxRate += 18;
  }

  const totalTax = (price * taxRate) / 100; // 18% = 18 /100
  const totalDiscount = (price * discountRate) / 100;
  const total = price - totalDiscount + totalTax;
  return total;
};

function calculate() {
  // Get the price from the input, and convert it to number
  const price = Number(inputEl.value);
  const totalPrice = getPrice(price);
  resultEl.innerText = `Total price is ${totalPrice}`;
}
