const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// DOM Elements
const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountEl = document.getElementById("amount");
const resultEl = document.getElementById("result");
const btnConvert = document.getElementById("btnConvert");

fetch("./data/currencies.json")
  .then((res) => res.json()) // converts json to JS Object
  .then((data) => {
    // console.log(data);

    // We need to convert data to array to put them into select options
    const keys = Object.keys(data);
    const values = Object.values(data);

    let optionStr = "";

    for (let i = 0; i < keys.length; i++) {
      optionStr += `<option value=${keys[i]}> ${values[i]} </option>`;
    }

    currencyOne.innerHTML = optionStr;
    currencyTwo.innerHTML = optionStr;
  })
  .catch((err) => console.log(err));

btnConvert.addEventListener("click", () => {
  let baseCurrency = currencyOne.value;
  let targetCurrency = currencyTwo.value;
  let amount = amountEl.value;

  fetch(`${API_URL}${baseCurrency}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let rates = data.rates[targetCurrency];

      resultEl.innerHTML = `${amount} ${baseCurrency} = ${
        rates * amount
      } ${targetCurrency}`;
      amountEl.value = "";
    });
});
