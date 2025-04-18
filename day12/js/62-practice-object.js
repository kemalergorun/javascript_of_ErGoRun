// === DOM Elements ===
const selectEl = document.querySelector("#carList");
const carValueEl = document.querySelector("#carValue");

// === Data ===
const car = {
  brand: "Audi",
  model: "A4",
  color: "Red",
  year: 2023,
  price: 35000,
  doors: 4,
  engine: "2.0 TDI",
  fuel: "diesel",
  seats: 5,
};

console.log(car["seats"]);
console.log(car["model"]);

// === Event Listener ===
selectEl.addEventListener("change", (e) => {
  console.log(e.target.value);

  const x = e.target.value; // selectEl.value
  carValueEl.innerText = car[x];
});

// === Functions ===
function populateSelectElement() {
  //
  const keys = Object.keys(car);
  // console.log(keys);
  // console.log(keys[0]);
  // console.log(keys[1]);
  // console.log(keys[2]);
  // console.log(keys[3]);
  // console.log(keys[4]);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    // console.log(key);

    selectEl.innerHTML += `
        <option value=${key} > ${key} </option>
        `;
    // console.log(selectEl.innerHTML);
  }
}

populateSelectElement();
