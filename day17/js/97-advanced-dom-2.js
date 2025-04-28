// DOM Element
const spanEl = document.getElementById("listElement");

console.log(spanEl);

// closest(selector)
// Closest will find the first upper element of written selector.
const liEl = spanEl.closest("li");
console.log(liEl);

const ulEl = spanEl.closest("ul");
console.log(ulEl);

const mainEl = spanEl.closest("main");
console.log(mainEl);

// children
const allListElements = ulEl?.children;
console.log(allListElements);
// We need to convert HTMLCollection to array to use array methods:
const allListElementsArr = Array.from(allListElements);
console.log(allListElementsArr);

// firstElementChild / lastElementChild
const firstLiEl = ulEl.firstElementChild;
firstLiEl.innerText = "ulEl.firstElementChild";

const lastLiEl = ulEl.lastElementChild;
lastLiEl.innerText = "ulEl.lastElementChild";

console.log(spanEl.firstElementChild); // null

// parentElement
const parentElementOfUl = ulEl.parentElement;
console.log(parentElementOfUl);

// nextElementSibling / lastElementSibling
const nextElementOfH1 = document.querySelector("h1");
console.log(nextElementOfH1.nextElementSibling); // main

const prevElOfMain = mainEl.previousElementSibling;
console.log(prevElOfMain);

// Accessing h1 from spanEl:
const h1El =
  spanEl.parentElement.parentElement.parentElement.previousElementSibling;

const h1El2 = spanEl.closest("main").previousElementSibling;

console.log(h1El, h1El2);
