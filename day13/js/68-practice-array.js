// DOM Elements
const inputEl = document.querySelector("input");
const addCityEl = document.querySelector(".input-group > button");
const btnGroupEl = document.querySelector(".btn-group");
const ulEl = document.querySelector("ul");

// Data
const cityArr = ["Berlin", "Istanbul", "New York", "Amsterdam"];

// Events
addCityEl.addEventListener("click", () => {
  const inputCity = inputEl.value;
  if (isExists(cityArr, inputCity)) {
    cityArr.push(inputCity);
  }
  populateCitiesData(cityArr);
});

btnGroupEl.addEventListener("click", (e) => {
  let eventName = e.target.innerText;

  switch (eventName.toLowerCase()) {
    case "sort":
      cityArr.sort();
      break;
    case "reverse":
      cityArr.reverse();
      break;
    case "remove first":
      cityArr.shift();
      break;
    case "remove last":
      cityArr.pop();
      break;
    case "remove all":
      cityArr.splice(0);
      break;
    case "mix":
      shuffle(cityArr);
  }

  populateCitiesData(cityArr);
});

// Functions
function populateCitiesData(arr) {
  ulEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const city = arr[i];

    ulEl.innerHTML += `<li class="list-group-item"> ${city} </li>`;
  }
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function isExists(arr, newItem) {
  if (arr.includes(newItem)) {
    return false;
  }

  // for(let i = 0 ; i < arr.length ; i++){
  //     if(arr[i].toLowerCase() === newItem.toLowerCase()){
  //         return false;

  //     }
  // }

  return true;
}

populateCitiesData(cityArr);
