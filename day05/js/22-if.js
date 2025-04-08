let number = 8;

if (number > 10) {
  console.log("Number given is greater then 10");
}

console.log("Operation is done.");

// DOM Elements
const inputEl = document.querySelector("#role");
const listEl = document.querySelector("ul.list-unstyled");

function checkRole() {
  if (inputEl.value === "admin") {
    listEl.innerHTML += `
        <li><a href="#" class="text-decoration-none">Profiles</a></li>
        <li><a href="#" class="text-decoration-none">Users</a></li>
        <li><a href="#" class="text-decoration-none">Reports</a></li>
        `;
  }
}
