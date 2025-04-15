let num = 10;

// Function without parameter or return statement:
function numPlusNum() {
  num += num;
}

console.log(num);
numPlusNum();
console.log(num);

// Function with parameters but no return statement:
//                    parameters
function addTwoNumber(num1, num2) {
  console.log(`Function addTwoNumber result is ${num1 + num2}`);
}

//           arguments
addTwoNumber(5, 6);
// console.log(`Function addTwoNumber result is ${5 + 6}`);
addTwoNumber(10, 20);

// Function with parameter and return statement
function getAge(birthYear) {
  const dateTime = new Date();
  const currentYear = dateTime.getFullYear();
  const age = currentYear - birthYear;
  // return will return an outcome which can be assignable.
  return age;
}

let resultAge = getAge(2000);
console.log(resultAge);
