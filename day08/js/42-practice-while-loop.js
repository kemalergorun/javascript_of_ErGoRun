// DOM Elements
const resultEl = document.querySelector("#result");
const inputEl = document.querySelector("#input");

// Function
function calculate() {
  // Getting the user input as positive number:
  let num = Math.abs(inputEl.value);
  let sum = 0;

  while (num > 0) {
    // Getting the last digit
    const lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10); // if you have a number with decimal, simply remove the decimal part, and return the number that way.
  }

  resultEl.innerText = `Sum of digits: ${sum}`;
}
