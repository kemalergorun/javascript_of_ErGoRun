const paragraphEl1 = document.querySelector(".paragraph");
const paragraphEl2 = document.querySelector(".paragraph:nth-child(2)");

paragraphEl1.classList.add("danger");
paragraphEl2.classList.remove("success");

const h2El = document.querySelector("h2");
const spanEl = document.querySelector("footer span");
spanEl.innerText = h2El.innerText;

let firstName = "John";
let lastName = "Doe";

const p1El = document.querySelector("#p1");

p1El.innerHTML = `<span class="italic"> ${firstName} <b> ${lastName.toUpperCase()} </b> </span>`;
