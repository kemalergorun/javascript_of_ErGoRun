// DOM Elements
const btnStartEl = document.getElementById("btnStart");
const btnStopEl = document.getElementById("btnStop");
const list = document.getElementById("list");

// Global Varibale
let intervalId;

// Events
btnStartEl.addEventListener("click", () => {
  startInterval(100);
});

// If you dont stop your interval it will be working all the time which may be resulted breaking your application!!!
btnStopEl.addEventListener("click", () => {
  clearInterval(intervalId);
});

function startInterval(time) {
  intervalId = setInterval(() => {
    const price = Math.floor(Math.random() * 100) + 100;

    const listItem = document.createElement("li");
    listItem.innerText = price;
    listItem.setAttribute("class", "list-group-item text-center");
    list.appendChild(listItem);
  }, time);
}
