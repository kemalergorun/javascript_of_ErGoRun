// Whenever only export is used, we have to use curly brackets and also exact same name of the function
import { sum } from "./sum.js";

// Whenever export default used there is no need to matching name of the function and curly brackets:
import defaultMultiply, { showResult } from "./multiply.js";

// DOM Elements
const firstEl = document.getElementById("first");
const secondEl = document.getElementById("second");
const sumEl = document.getElementById("sum");
const mulEl = document.getElementById("multiply");
const outputEl = document.getElementById("output");

sumEl.addEventListener("click", () => {
  const first = +firstEl.value;
  const second = +secondEl.value;

  const result = sum(first, second);
  showResult(result);
  outputEl.innerText = `Sum of the values are ${result}`;
});

mulEl.addEventListener("click", () => {
  const first = +firstEl.value;
  const second = +secondEl.value;

  const result = defaultMultiply(first, second);
  showResult(result);
  outputEl.innerText = `Sum of the values are ${result}`;
});
