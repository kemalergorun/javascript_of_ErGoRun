const numbers = [1, 2, 3, 4, 5, 6];

const foundNumber = numbers.find((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return item > 3;
});

console.log(foundNumber);

const notFoundNumber = numbers.find((item) => item > 10);
console.log(notFoundNumber); // undefined
