// DATA
const numbers = [43, 24, 93, 28, 22];
const sentence = "Nice Weather";
const car = {
  brand: "Mercedes",
  model: "S500",
  price: 65000,
};

// FOR

function findSum1(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(findSum1(numbers)); // 210

// FOR IN
// Can be used with Arrays and Objects
function findSum2(arr) {
  let sum = 0;

  for (let i in arr) {
    sum += arr[i];
  }

  return sum;
}

console.log(findSum2(numbers)); // 210

function findSumInObject(obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
}

console.log(findSumInObject(car));

// FOR OF
// Can be used with Arrays, Strings etc.
function findSum3(arr) {
  let sum = 0;

  for (let item of arr) {
    sum += item;
  }

  return sum;
}

console.log(findSum3(numbers)); // 210

function findLettersInString(str) {
  for (let char of str) {
    console.log(char);
  }
}

findLettersInString(sentence);
