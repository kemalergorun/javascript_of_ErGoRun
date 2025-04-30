import { countries } from "../data/countries.js";

// DOM Elements
const searchBox = document.getElementById("query");
const listEl = document.getElementById("list");

let timeoutId;

// Event
searchBox.addEventListener("input", (e) => {
  console.log("Event is triggered");

  const query = e.target.value;

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    populateList(filteredData(query));
  }, 1000);
});

// Function
function populateList(arr) {
  listEl.innerText = "";

  arr.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.innerText = item?.name?.common;
    liEl.setAttribute("class", "list-group-item bg-primary");
    listEl.appendChild(liEl);
  });
}

function filteredData(query) {
  if (!query) {
    return countries;
  }

  const filteredCountriesData = countries.filter((country) =>
    country?.name?.common?.toLowerCase().startsWith(query.toLowerCase())
  );

  return filteredCountriesData;
}

// INITIAL CALL
// populateList(countries);
