//  ===================  SCOPES  ===================

// ________ Function Scope ________
// Variables declared inside a function are in the function scope, and they are only accessible within the function.

function sayHello() {
  let message = "Hello";
  console.log(message);
}

// console.log(message); // ReferenceError: message is not defined.
sayHello();

// ________ Global Scope ________
// Variables declared at the top of the file are in the global scope, and they are accessible from anywhere after its declaration.
let anotherMessage = "Hello from Global Scope.";

function sayHelloGlobal() {
  console.log(anotherMessage);
}

sayHelloGlobal();
console.log(anotherMessage);

// ________ Block Scope ________

if (true) {
  let blockMessage = "Hello from Block Scope";
  console.log(blockMessage);
}

// console.log(blockMessage); // ReferenceError: blockMessage is not defined

// EXAMPLES
// Example 1
// const foo = function (){
//     let num1 = 22;
//     console.log(num1);
// }
// foo();
// console.log(--num1); // ReferenceError

// Example 2
let num1 = 5;
const foo = function () {
  num1 = 10;
  console.log(`Inside Function: ${num1}`); // Inside Function: 10
};
foo();
console.log(`Outside Function: ${++num1}`); // Outside Function: 11

// Example 3
const number1 = 1;
const number2 = 2;
const number3 = 3;

// If globally declared let and const name is used inside of function scope again (which is allowed), function scope will be prioritized first more than global scope.
function getNumbers() {
  // Function scope const will be used if there is declared any.
  const number1 = 100;
  // Function scope const will be used if there is declared any.
  const number2 = 200;
  console.log(
    `Number 1 = ${number1}, Number 2 = ${number2}, Number 3 = ${number3}`
  );
}

getNumbers(); // Number 1 = 100, Number 2 = 200, Number 3 = 3
console.log(number1); // 1
console.log(number2); // 2

const myFunction = function (num) {
  if (num < 0) {
    let negative = true;
  }

  console.log(negative);
};

// myFunction(); // ReferenceError: negative is not defined
