let grade = 75;

console.log(grade == 70);
//  75 equal to 70 no it is not => false
console.log(grade == 75); // true

// Strict Equal and Strict Not Equal

let number1 = 10;
let number2 = "10";

console.log("number1 == number2 ", number1 == number2); // true

console.log("number1 === number2 ", number1 === number2); // false => It will check the types and values. If one of them is not the same then it will return false.

console.log(number1 != number2); // false
console.log(number1 !== number2); // true

const num1 = 5;
console.log(num1 > 3); // true
console.log(num1 < 3); // false

// Number and String Comparison

console.log(5 > "3"); // true => It will convert string to a number and do the comparison.
console.log(5 < "3"); // false

console.log(5 > "3a"); // false
console.log(5 < "3a"); // false
// Whenever string conversion resulted with NaN which will always give false when it is compared.

// String and String Comparison
console.log("30999999999999999999999999" > "31"); // false
console.log("apple" > "appel"); // true
// Compares character by character
