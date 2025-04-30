// DOM Element
const inputEl = document.getElementById("username");
const ageEl = document.getElementById("age");
const btnEl = document.getElementById("submit");

// Functions

function getUsername(input) {
  return input.value;
}

function sayHello(username) {
  return `Welcome ${username}`;
}

function getAge(ageInput) {
  return +ageInput.value;
}

btnEl.addEventListener("click", () => {
  const username = getUsername(inputEl);
  const age = getAge(ageEl);

  const message = sayHello(username);

  console.log(`${message}. You will be ${age + 1} years old next year.`);
});
