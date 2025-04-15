// DOM Elements
const inputEl = document.querySelector("#input");
const resultEl = document.querySelector("#result");

// Functions
function showResult() {
  // Get the input value
  const input = +inputEl.value;
  // Store prime number data
  const prime = isPrime(input);

  // Display result
  resultEl.innerText = `The number ${input} is ${
    prime ? "" : "not"
  } a prime number`;

  // Adding styling
  resultEl.classList.add(prime ? "prime" : "not-prime");
  resultEl.classList.remove(!prime ? "prime" : "not-prime");
}

/**
 *   Checks prime numbers and returns true if the number is prime
 *   @param {Number}
 *   @returns {Boolean}
 */
function isPrime(num) {
  // You can write if statements as one liner.
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    // If the number is divisible by any number between 2 and itself, it is not a prime and we should return false;
    if (num % i === 0) return false;
  }

  return true;
}
