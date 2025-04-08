// DOM Elements
const bodyEl = document.querySelector("body");
const btnSetMode = document.querySelector("#btnSetMode");
const iconEl = document.querySelector("i.fa-solid");

// Manipulation
function setMode() {
  const isDark = bodyEl.classList.contains("bg-dark");

  if (isDark) {
    bodyEl.classList.remove("bg-dark", "text-white");
    btnSetMode.classList.remove("btn-light");
    btnSetMode.classList.add("btn-dark");
    iconEl.classList.remove("fa-sun");
    iconEl.classList.add("fa-moon");
  } else {
    bodyEl.classList.add("bg-dark", "text-white");
    btnSetMode.classList.remove("btn-dark");
    btnSetMode.classList.add("btn-light");
    iconEl.classList.remove("fa-moon");
    iconEl.classList.add("fa-sun");
  }
}
