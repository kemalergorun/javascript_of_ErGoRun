// DOM Elements
// getElementById("id")
const paragraphEl = document.getElementById("paragraph"); // Checks all the id's of paragraph and returns the first one it finds.

console.log(paragraphEl === document.querySelector("#paragraph")); // true
console.log(paragraphEl);

// getElementsByTagName("tagName")
const paragraphElements = document.getElementsByTagName("p");

console.log(paragraphElements);

// const mappedPEls = paragraphEl.map((item) => item); // This is not going to work!
// We have to convert HTMLCollection to Array to use array methods:
const paragraphsArr = Array.from(paragraphElements);
console.log(paragraphsArr);
const mappedParagraphsArr = paragraphsArr.map((item) => item);
console.log(mappedParagraphsArr);

// getElementsByClassName("className")
const lineElements = document.getElementsByClassName("line");
console.log(lineElements);

// To use array methods:
const lineElementsArr = Array.from(lineElements);
console.log(lineElementsArr);
