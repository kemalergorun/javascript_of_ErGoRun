// Array
const numbers = [1, 2, 3, 54, 234, 0, 34, 91, 10];
const number2 = [-10, -2, -3, -4, -5];

function getMaxNumber(arr) {
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

console.log(getMaxNumber(numbers));
console.log(getMaxNumber(number2));
