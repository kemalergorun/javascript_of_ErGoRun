// DOM Elements
const selectEl = document.querySelector("#currency");
const priceEl = document.querySelector("#price");

// Data

// Alternative way
let exchangeRates = [1, 0.883, 0.754];
let price = 10;
const cardDataForDifferentCurrencies = exchangeRates.map(
  (item) => price * item
);
console.log(cardDataForDifferentCurrencies);
// ====================================================

let cardData = [
  {
    price: 10,
    currency: "USD",
  },
  {
    price: 8.83,
    currency: "EUR",
  },
  {
    price: 7.54,
    currency: "GBP",
  },
];

// Event
selectEl.addEventListener("change", (e) => {
  console.log(e.target.value);

  let currency = "";

  switch (e.target.value) {
    case "USD":
      currency = `${cardData[0].price} ${cardData[0].currency}`;
      break;
    case "EUR":
      currency = `${cardData[1].price} ${cardData[1].currency}`;
      break;
    case "GBP":
      currency = `${cardData[2].price} ${cardData[2].currency}`;
  }

  priceEl.innerText = currency;
});

// Function
function populateSelectEl() {
  cardData.forEach((item) => {
    selectEl.innerHTML += `
        <option value=${item.currency}> ${item.currency} </option>
        `;
  });
}

populateSelectEl();
