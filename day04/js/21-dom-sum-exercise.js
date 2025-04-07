// DOM Elements
const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");
const resultEl = document.querySelector("p.alert");

// DOM Manipulation
function calculateSum() {
  // Given inputs type will be string. We need to consider the types whenever we get data from the user. If we are going to use this data for arithmetic operators, we need to apply type casting by writing Number() or +.
  const num1 = input1El.value;
  const num2 = input2El.value;

  const sum = +num1 + +num2;

  // resultEl.innerText = `Sum of these inputs are ${sum}`;
  resultEl.innerHTML = `Sum of these inputs are <b class="fs-1 text-danger"> ${sum} </b>`;
  resultEl.classList.remove("alert-success");
  resultEl.classList.add("alert-primary");
}
