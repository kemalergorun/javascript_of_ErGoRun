// Defining a function => 3 Ways

// RULES:
// If a function does not return anything, it returns "undefined".
// Parameters are values that are passed to the function when we call it.
// When you call a function and pass values to it, these are called arguments.
// If you have them inside the function declaration, they are called parameters.

myFunction();

// 1. Function Declaration - Traditional Way
// If you are using traditional way to define a function then you can call the function before defining it, because JavaScript hoists the function declaration to the top of the file.
function myFunction() {
  console.log("myFunction");
}

const returnOfMyFunction = myFunction();
console.log("Return: ", returnOfMyFunction);

// 2. Function Expression - Anonymous Function
// If you are using function expression, then you cannot call the function before defining it, because JavaScript does not hoist the function expression.
// myFunctionExpression() //ReferenceError

const myFunctionExpression = function (firstName, lastName) {
  console.log(`My function expression: ${firstName} ${lastName}.`);
  return "Hello from function expression";
};

const message = myFunctionExpression("John", "Doe");
console.log(message);

console.log(typeof myFunctionExpression);

// 3. Arrow Function - ES 6
// Arrow functions are always anonymous functions, so you cannot give them a name, but you can assign them to a variable.
// If you are using arrow function, then you cannot call the function before defining it, because JavaScript does not hoist the function expression.
// myArrowFunction(); // ReferenceError

const myArrowFunction = (firstName, lastName) => {
  console.log(`My Arrow Function: ${firstName} ${lastName}.`);
  return "Hello from arrow function.";
};

let message2 = myArrowFunction("Jane", "Doe");
console.log(message2);
// If you write an arrow function in one line without curl brackets, arrow pointing way will be returned even if you do not use return statement.
const myArrowFunction2 = () => "Hello I am a one liner arrow function"

console.log(myArrowFunction2());
