function calculateFactorial() {
  // Accessing DOM Elements
  const inputEl = document.querySelector("#input");
  const resultEl = document.querySelector("#result");

  let num = +inputEl.value;

  // Validation
  if (num < 0) {
    resultEl.innerText = "Please enter a positive number.";
    return;
  }

  // Cleaning previous result
  resultEl.innerText = "";

  let factorial = 1; // 5! = 5 * 4 * 3 * 2 * 1;

  if (num === 0) {
    resultEl.innerText = "Factorial: 1";
    return;
  }

  do {
    factorial *= num;
    num--;
  } while (num > 1);

  resultEl.innerText = `Factorial: ${factorial}`;
}
