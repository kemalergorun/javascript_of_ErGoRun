// ======== DATA TYPES ========

// ------- Primitive Data Types -------
// String
const firstName = "John";
let lastName = "Doe";
let sentence = "String is a great data type";
console.log(firstName, lastName, sentence);

// Number
let age = 30;
console.log(age);
sentence = 150;
console.log(sentence);
let PI = 3.14;
console.log(PI);

// BigInt
let bigNumber = 999n;
console.log(bigNumber);

// Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// Symbol
let symbol = Symbol("mySymbol");
console.log(symbol);

// Undefined
const emptyConst = undefined;
console.log(emptyConst);

// Null
let nullValue = null;
console.log(nullValue);

// ------- Non-Primitive Data Types -------

// Array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// Object
let myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: true,
  bloodType: null,
};

console.log(myObject);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof sentence);
console.log(typeof age);
console.log(typeof PI);
console.log(typeof bigNumber);
console.log(typeof isTrue, typeof isFalse);
console.log(typeof symbol);
console.log(typeof emptyConst);
console.log(typeof nullValue);
console.log(typeof myArray);
console.log(typeof myObject);

console.log(isNaN(age));
console.log(isNaN(firstName));

// var num1 = 10;
// var num2 = 5
// var num1 = "fifteen";
// var num2 = true;
// let number1 = 12;
// let number2 = 9;
// let number1 = true;
// console.log(number1 + number2);
// console.log(num1 + num2);
// Redeclaring in var is allowed while, redeclaring let is not allowed. let will throw an error in such a case. Using the same variable name twice may cause problems in your code, so better to use let instead of var.
// Re-assigning var and let are allowed.

// Const are not allowed to be redeclared or reassigned.