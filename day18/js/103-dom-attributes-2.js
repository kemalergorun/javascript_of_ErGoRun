// const h1El = document.createElement("h1");
// h1El.innerText = "IDK";
// h1El.setAttribute("class", "text-center text-danger")
// document.querySelector("body").appendChild(h1El);

// DOM Elements
const paragraphEl = document.getElementById("paragraph");
const unorderedListEl = document.getElementById("unorderedList");

// .createElement("tagName")
const liEl = document.createElement("li");
liEl.innerText = "List Item 1";
liEl.setAttribute("class", "list-group-item bg-primary text-white");
console.log(liEl);

const li2El = document.createElement("li");
li2El.innerText = "List Item 2";
li2El.setAttribute("class", "list-group-item bg-black text-white");

// .appendChild(elementToAppend)
unorderedListEl.appendChild(liEl);
unorderedListEl.appendChild(li2El);

// .append(elementToAppend, elementToAppend, elementToAppend...)

const spanEl1 = document.createElement("span");
spanEl1.innerText = "First span";
spanEl1.classList.add("bg-danger", "text-primary", "p-1");

const spanEl2 = document.createElement("span");
spanEl2.innerText = "Second span";
spanEl2.classList.add("bg-warning", "text-info", "p-1");

const spanEl3 = document.createElement("span");
spanEl3.innerText = "Third span";
spanEl3.classList.add("bg-success", "p-1");

paragraphEl.append(spanEl1, spanEl2, spanEl3);

// It will act like innerText not innerHTML
// paragraphEl.append(`<span class="bg-black p-1">Hello</span>`);

// .prepend(elementToAppend, elementToAppend...)

const liEl2 = document.createElement("li");
liEl2.innerText = "First Prepended";
liEl2.setAttribute("class", "list-group-item");

const liEl3 = document.createElement("li");
liEl3.innerText = "Second Prepended";
liEl3.setAttribute("class", "list-group-item");

unorderedListEl.prepend(liEl2, liEl3);

// .remove()

console.log(unorderedListEl.firstElementChild);
unorderedListEl.firstElementChild.remove();
// paragraphEl.remove();

const arr = [1, 5, 2, 3, 11];

arr.forEach((item) => {
  const liEl = document.createElement("li");
  liEl.innerText = item;
  liEl.setAttribute("class", "list-group-item");

  unorderedListEl.appendChild(liEl);
});

unorderedListEl.lastElementChild.remove();
console.log(arr);
