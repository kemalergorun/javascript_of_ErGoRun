// DOM Elements
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const spanEls = document.getElementsByClassName("colon");
const h1El = document.querySelector("h1");

console.log(hourEl, minuteEl, secondEl);

// Global Data
let intervalId;

// Event
h1El.addEventListener("click", () => {
  clearInterval(intervalId);
});

// Function
function updateClock() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  // It adds second argument if the character written in the first argument is not matched
  // for example 2, "0" => whenever 7 it will make it 07
  hourEl.innerText = String(currentHour).padStart(2, "0");
  minuteEl.innerText = String(currentMinute).padStart(2, 0);
  secondEl.innerText = String(currentSecond).padStart(2, 0);

  console.log(spanEls);
  const colons = Array.from(spanEls);
  colons.forEach((colon) => colon.classList.toggle("hidden"));
}

updateClock();
// We need to update the UI in every second to see the changes on the time:
intervalId = setInterval(() => {
  updateClock();
}, 1000);
