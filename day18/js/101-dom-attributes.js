// DOM Elements
const inputEl = document.getElementById("wholeNumber");
const buttonEl = document.querySelector("button");

// DOM Attributes

// getAttribute(attribute)
const inputType = inputEl.getAttribute("type");
console.log(inputType);

if (inputType === "number") {
  inputEl.value = 5;
}

// setAttribute(attribute, attToBeAdded)
buttonEl.setAttribute("class", "btn btn-primary w-100 mt-3");
inputEl.setAttribute("placeholder", "Enter a whole number");
buttonEl.setAttribute("id", "btnClickMe");

// removeAttribute(attribute)
buttonEl.removeAttribute("disabled");

// attributes
const inputElAttributes = inputEl.attributes;
console.log(inputElAttributes);
const buttonElAttributes = buttonEl.attributes;
console.log(buttonElAttributes);
