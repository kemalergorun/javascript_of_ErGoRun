const divEl = document.querySelector("div");

console.log(divEl.children);

// classList.add("classToAdd", "classToAdd");

divEl.children[0].classList.add("fa-solid", "fa-face-smile", "fa-5x");

// classList.remove("classToBeRemoved")

divEl.children[0].classList.remove("fa-5x");

divEl.children[2].addEventListener("click", (e) => {
  e.target.classList.toggle("fa-truck");
  e.target.classList.toggle("fa-headphones");

  // returns true of false => .classList.contains("toBeChecked")
  if (e.target.nextElementSibling.classList.contains("fa-solid")) {
    e.target.nextElementSibling.classList.add("fa-cloud");
  }

  // replace("toBeReplacedItem", "replacingItem")
  e.target.nextElementSibling.nextElementSibling.classList.replace(
    "fa-image",
    "fa-file"
  );
});
