// ========== DOM ELEMENTS ==========
const inputEl = document.querySelector("#input");
const guessBtnEl = document.querySelector("#guess");
const startBtnEl = document.querySelector("#start");
const resultEl = document.querySelector("#result");

// ========== VARIABLES / CONSTANTS ==========
let randomNumber = 0;
const minRange = 1;
const maxRange = 100;
const totalShots = 10;
let remainingShots = totalShots;

// ========== FUNCTIONS ==========

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function start() {
  randomNumber = generateRandomNumber(minRange, maxRange);
  inputEl.removeAttribute("disabled");
  inputEl.value = "";
  inputEl.focus();
  guessBtnEl.classList.remove("d-none");
  startBtnEl.innerText = "Reset the Game";
  resultEl.innerText = "";
}

function guess() {
  const guessNumber = +inputEl.value;

  if (
    !guessNumber ||
    isNaN(guessNumber) ||
    guessNumber < minRange ||
    guessNumber > maxRange
  ) {
    resultEl.innerText = `Please enter a valid number between ${minRange} and ${maxRange}`;
    resultEl.classList.add("alert", "alert-danger");
  }

  if (guessNumber === randomNumber) {
    resultEl.innerText = "🏆🏆🏆 YOU WIN 🏆🏆🏆";
    resultEl.classList.add("alert", "alert-success");
    reset();
  } else if (guessNumber > randomNumber) {
    resultEl.innerText = "👇 Try a smaller number 👇";
    resultEl.classList.add("alert", "alert-warning");
  } else {
    resultEl.innerText = "👆 Try a higher number 👆";
    resultEl.classList.add("alert", "alert-warning");
  }

  inputEl.focus();
  inputEl.innerText = "";
}

function reset() {
  guessBtnEl.classList.add("d-none");
  startBtnEl.innerText = "Start the Game";
  inputEl.setAttribute("disabled", true);
}
