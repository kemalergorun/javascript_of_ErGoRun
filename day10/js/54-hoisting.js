// Hoisting is a mechanism in JavaScript where variables and functions declarations are moved to the top of their scope before the code execution.

// console.log(calculateAge(2020));
console.log(x);

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

var x = 10;
console.log(x);

var x = 15;
console.log(x);

var x = 20;
console.log(x);

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 100;

function myFunc() {
  console.log(a);
  if (true) {
    var a = 10;
  }
}

// myFunc() // undefined

// Even though let and const are called not hoisted, they are hoisted but in a different way. They are put in the temporal dead zone to understand it, you can simply console.log them before they are declared. You will get a reference error saying cannot access before initialization. But if you remove the variable completely, You will get a reference error saying that variable is not defined.

// console.log(number); // ReferenceError: Cannot access 'z' before initialization
let number = 0;

// console.log(number1); // number1 is not defined
