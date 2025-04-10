// Access all of the prices as a list.
const priceEls = document.querySelectorAll("ul > li > span");
console.log(priceEls);

function applyDiscount() {
  // Accessing discount element:
  const discountEl = document.querySelector("#discount");
  // Storing discount value as a number:
  let discount = +discountEl.value;

  // As user may enter different data, we need to validate them, and if they break our program we need to create restrictions:
  // Input not a number validation:
  if (isNaN(discount)) {
    alert("Discount must be number!");
    return;
  }
  // Empty input or 0 usage validation
  if (!discount) {
    alert("Please enter a number!");
    return;
  }
  // Negative number validation.
  if (discount < 0) {
    alert("Please enter a positive number!");
    return;
  }
  // Discount is more than 100 (to prevent negative prices.)
  if (discount > 100) {
    alert("Woooahhh cheapskate...");
    return;
  }

  // 0 < 4
  // 1 < 4
  // 2 < 4
  // 3 < 4
  // 4 < 4 false => for loop stops.
  console.log(priceEls.length);
  // We should make it dynamic by calculating the length of the elements, otherwise discount will not apply to new elements and also whenever elements are removed we may encounter an error.
  for (let i = 0; i < priceEls.length; i++) {
    // Access the price of an individual span and store it as price
    let price = +priceEls[i].innerText;
    // Now we know the discount and price, so we can calculate discountedPrice as well:
    let discountedPrice = (price - (price * discount) / 100).toFixed(2);
    // We have discountedPrice, so we need to show it to user:
    priceEls[i].innerText = discountedPrice;
  }

  discountEl.value = "";
}
