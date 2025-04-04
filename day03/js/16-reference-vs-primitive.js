// Primitive / Value Data Types

let num1 = 10;
let num2 = num1;
num1 = 5;

console.log("number 1: ", num1);
console.log("number 2: ", num2);
// Changing the num1 value does not affect on the num2 value, since they are independent from each other, and primitive data type are stored in memory as separate values.

// Reference / Non-Primitive Data Types

let car1 = {
  name: "Audi",
  year: 2025,
  color: "red",
};

let car2 = car1;

car1.name = "BMW";

console.log("Car 1: ", car1);
console.log("Car 2: ", car2);
