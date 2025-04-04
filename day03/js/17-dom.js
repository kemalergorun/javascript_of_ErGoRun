console.log(document);
console.log(document.querySelector("h1"));
console.log(document.querySelector("#aboutUs"));
console.log(document.querySelector("p#aboutUs"));
console.log(document.querySelector(".list"));
console.log(document.querySelector(".list li:nth-child(4)"));
console.log(document.querySelector(".list + .list"));

const h1El = document.querySelector("h1");
const aboutUsEl = document.querySelector("#aboutUs");
const firstListEl = document.querySelector(".list");
const firstListItemFourEl = document.querySelector(".list li:nth-child(4)");
const secondListEl = document.querySelector(".list + .list");

console.log(h1El, aboutUsEl, firstListEl, firstListItemFourEl, secondListEl);

const allLists = document.querySelectorAll(".list");
console.log(Array.from(allLists));
console.log(allLists);

const h2El = document.querySelector("h2");
h2El.innerText = "This is manipulated with JavaScript";
// with innerText, it will not render the HTML tags, it will just render the text.

aboutUsEl.innerHTML = "<em> <b> About Us </b> </em>";
