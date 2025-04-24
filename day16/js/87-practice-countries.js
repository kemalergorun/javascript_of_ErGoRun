import { countries } from "../data/countries.js";

// DOM Elements
const countrySelectEl = document.querySelector("#country");
const listEl = document.querySelector("#list");

// Events
countrySelectEl.addEventListener("change", (event) => {
  const selectedCountry = countries.filter((country) => {
    return country.ccn3 === event.target.value;
  });

  listEl.innerText = "";
  populateList(selectedCountry);
});

// Functions
function populateList(array) {
  // Validation
  if (!Array.isArray(array)) {
    return;
  }

  array.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.innerText = `${item?.name?.common} - ${item?.region} - ${item?.ccn3}`;
    listEl.appendChild(liEl);
  });
}

function populateSelect(array) {
  // Validation
  if (!Array.isArray(array)) {
    return;
  }

  array.forEach((item) => {
    const optionEl = document.createElement("option");
    optionEl.value = item?.ccn3;
    optionEl.innerText = item?.name?.common;
    countrySelectEl.appendChild(optionEl);
  });
}

populateSelect(countries);
// populateList(countries);
