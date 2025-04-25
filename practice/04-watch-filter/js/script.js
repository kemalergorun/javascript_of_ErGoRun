// Data
import { data } from "../data/data.js";

// DOM Elements
const searchEl = document.querySelector("#search");
const catContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
const productsContainer = document.querySelector(".products");

// Events
searchEl.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase().trim();

  if (value) {
    // Filtering with name:
    const searchFilteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    displayProducts(searchFilteredData);
  } else {
    displayProducts(data);
  }
});

catContainer.addEventListener("click", (e) => {
  let selectedCat = e.target.innerText;
  console.log(selectedCat);

  if (selectedCat.trim() == "All") {
    displayProducts(data);
  } else {
    const catFilteredData = data.filter(
      (item) => item.cat.trim() == selectedCat.trim()
    );
    displayProducts(catFilteredData);
  }
});

priceRange.addEventListener("input", (e) => {
  console.log(e.target.value);
  let value = e.target.value;
  priceValue.innerText = `${value}$`;

  const priceFilteredData = data.filter((item) => item.price <= value);

  displayProducts(priceFilteredData);
});

// Functions

/**
 * Uses data to create cards that will be seen on UI.
 */
const displayProducts = (filteredData = data) => {
  let showFilteredProducts = filteredData
    .map(
      (product) => `
    
    <div class="product">
    <img src=${product?.img} >
    <span class="name"> ${product?.name} </span>
    <span class="price"> ${product?.price}$ </span>
    </div>
    `
    )
    .join("");

  productsContainer.innerHTML = showFilteredProducts;
};

displayProducts(data);

/**
 * Gets all the item categories, put unique ones in an array and populate them inside of catContainer element.
 */
const setCategories = () => {
  let allCategories = data.map((item) => item.cat);

  // console.log(allCategories);

  let uniqueCategories = allCategories.filter(
    (item, index) => allCategories.indexOf(item) == index
  );

  // let uniqueCategories = [...new Set(allCategories)];

  // let uniqueCategories = [];
  // allCategories.forEach((item) => {
  //     if(!uniqueCategories.includes(item)){
  //         uniqueCategories.push(item);
  //     }
  // })

  uniqueCategories.unshift("All");

  // console.log(uniqueCategories);

  catContainer.innerHTML = uniqueCategories
    .map((cat) => `<span class="cat-item"> ${cat} </span>`)
    .join("");
};

// [1 , 1 ,1 ,1 3, 5]

setCategories();

/**
 * Gets all the price data and adjust range input according to its maximum and minimum values.
 */
const setPrice = () => {
  let priceList = data.map((item) => item.price);
  let minPrice = Math.min(...priceList);
  let maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;

  priceValue.innerText = `${maxPrice}$`;
};

setPrice();
