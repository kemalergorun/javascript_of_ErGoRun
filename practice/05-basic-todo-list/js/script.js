let notes = [
  "Read book",
  "Go walking",
  "Do sports",
  "Study JS",
  "Repeat subjects",
  "Enjoy the life",
];

// DOM Elements
const listEl = document.querySelector(".list");
const inputEl = document.getElementById("newInput");
const addBtnEl = document.getElementById("addBtn");
const removeBtnEl = document.getElementById("removeBtn");
const cardMenuEl = document.getElementById("cardMenu");
console.log(inputEl);

// Create li elements and add them into listEl - safe way:
for (let not of notes) {
  let li = document.createElement("li");
  li.innerText = not;
  listEl.appendChild(li);
}

// This way is not safe:
// for(let not of notes){
//     listEl.innerHTML += `<li> ${not} </li>`
// }

addBtnEl.addEventListener("click", () => {
  if (!inputEl.value) {
    inputEl.focus();
    return;
  }

  // Create a new list element and add it to original array:
  const li = document.createElement("li");
  li.innerText = inputEl.value;
  listEl.appendChild(li);
  console.log(notes);
  notes.push(inputEl.value);
  showResult(notes);
  inputEl.value = "";
  inputEl.focus();
});

removeBtnEl.addEventListener("click", () => {
  if (notes.length === 0) {
    alert("You have nothing to do :)");
  } else {
    notes.pop();
    showResult(notes);
  }

  // Deleting last li from the list:
  if (listEl.lastElementChild) {
    listEl.removeChild(listEl.lastElementChild);
  }
});

const showResult = (elements) => {
  if (!notes.length === 0) {
    cardMenuEl.innerHTML = "<b> Nothing to remove <b>";
  } else {
    cardMenuEl.innerText = elements.join(" - ");
  }
};

showResult(notes);
