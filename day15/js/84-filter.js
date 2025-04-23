const numbers = [1, 45, -9, -11, 65, 2, -4, -100];

const positiveNumbers = numbers.filter((number, index, array) => {
  return number > 0;
});

console.log(positiveNumbers); // [1, 45, 65, 2];

const negativeNumbers = numbers.filter((number) => number < 0);
console.log(negativeNumbers); // [-9, -11, -4, -100]

const arr = ["Hello", 0, null, 123, undefined, "", "World"];

const useableItems = arr.filter((item) => !!item === true);
console.log(useableItems);

// Return all the items that is positive and after 3rd index
const positiveAfterThird = numbers.filter((item, index) => {
  if (item > 0 && index > 3) {
    return item;
  }
});

console.log(positiveAfterThird);
