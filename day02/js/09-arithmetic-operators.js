// Arithmetic Operators

let numberOne = 52;
let numberTwo = 5;

console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne % numberTwo);
console.log(numberOne ** numberTwo);

// Number + Number = Number

console.log(typeof (3 + 5)); // number

// String + String = String (concatenation)

console.log(typeof ("Hello" + " World"));

// String + Number || Number + String = String (concatenation)

console.log(typeof ("100" + 15));
console.log("100" + 15 + 15); // 1001515
console.log(15 + 15 + "100"); // 30100

const money = "10";
const myNumber = 20;

// Type Casting
// If you want to type cast Number => Number() || +
console.log(Number(money) + myNumber); // 30
console.log(+money + myNumber);

console.log("Money: ", typeof money);

const lang = "JavaScript";

console.log(Number(lang)); // NaN (Not a Number)
console.log(typeof NaN); // NaN type is Number
console.log(isNaN(lang)); // => it is not a number so it is true.

// If you want to type cast to String => String()

const money2 = 151;
console.log(String(money2) + 15);

// console.log(+prompt("Please write your salary") + 100);

// If you want to type cast Boolean => Boolean() || !!
const hisName = "John";
console.log(Boolean(hisName)); // true || truthy
console.log(Boolean(money2)); // true || truthy
console.log(Boolean(money)); // true || truthy

// null, empty string, 0, undefined, NaN are falsy so they will be false
const emptyValue = null;
const emptyString = "";
const zero = 0;
const undefinedValue = undefined;
const notANumber = Number("HelloWorld");

console.log(
  Boolean(emptyValue),
  Boolean(emptyString),
  Boolean(zero),
  Boolean(undefinedValue),
  Boolean(notANumber)
);

/*
Priority Order
1   ()
2   **
3   * / %
4   + -
*/
const result = (1 ** 5 % (6 - 4)) / (2 - 0);
// 1 % (6-4) / (2-0)
// 1 % 2 / 2
// 1 / 2
console.log(result);
