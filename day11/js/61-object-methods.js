// === Object.create(source) ===
const person = {
  firstName: "John",
  lastName: "Doe",
  printIntro: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}.`);
  },
};

person.printIntro();

const person2 = person;

console.log(person2);
person.firstName = "Jane";
console.log(person2);

const anotherPerson = Object.create(person);

console.log(anotherPerson.firstName);
anotherPerson.firstName = "Mark";
console.log(person);

// === Object.assign(target, source) ===

const car1 = {
  brand: "Audi",
  model: "A7",
};

const car2 = {
  brand: "BMW",
  model: "720",
};

const newCar2 = car2; // the same reference
console.log(newCar2 === car2); // true

//                           targeted reference, source
const newCar = Object.assign(car1, car2);
console.log(newCar === car2); // false
console.log(newCar === car1); // true
console.log("New Car: ", newCar);
console.log("Car2: ", car2);
console.log("Car1", car1);

// *=== Object.entries(source) ===*
const object1 = {
  //  [0]    [1]
  brand: "Audi",
  //  [0]    [1]
  model: "Q3",
  //  [0]    [1]
  year: 2020,
  //  [0]    [1]
  color: "black",
};

let arr = Object.entries(object1);
console.log(arr); // [Array(2), Array(2), Array(2), Array(2)]

for (const [key, value] of Object.entries(object1)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// *=== Object.keys(source) ===*

const keys = Object.keys(object1);
console.log(keys); // ['brand', 'model', 'year', 'color']

// *=== Object.values(source) ===*

const values = Object.values(object1);
console.log(values); // ['Audi', 'Q3', 2020, 'black']
