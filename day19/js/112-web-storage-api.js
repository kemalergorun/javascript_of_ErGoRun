// DOM Elements
const btnSetEl = document.getElementById("btnSet");
const btnRemoveEl = document.getElementById("btnRemove");
const btnClearEl = document.getElementById("btnClear");

// Global Variables
const AUTH_SECRET = "8jq6vhO8y9pebOylJ4wAtBMi099JNi0HpxLQm5msMo=";

btnSetEl.addEventListener("click", setLocalStorage);
btnRemoveEl.addEventListener("click", removeLocalStorage);
btnClearEl.addEventListener("click", clearLocalStorage);

// Functions
function setLocalStorage() {
  localStorage.setItem("classified", AUTH_SECRET);
  localStorage.setItem("notClassified", "I love pizza");
}

function removeLocalStorage() {
  localStorage.removeItem("notClassified");
}

function clearLocalStorage() {
  localStorage.clear();
}
