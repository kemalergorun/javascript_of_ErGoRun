// ========== ACCESS METHODS ==========
// Array access methods does not change the existing arrays, but instead returns a new array.

// ===== myArray.concat(itemsToAdd) =====
const arr1 = ["🐧", "🐧", "🐧"];
const concatenatedArr = arr1.concat("🐋", "🐋"); // merges two or more arrays.
console.log(arr1); // ['🐧', '🐧', '🐧']
console.log(concatenatedArr); // ['🐧', '🐧', '🐧', '🐋', '🐋']

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const combinedArr = numbers.concat(
  letters,
  4,
  5,
  numbers,
  ["Hello", "World"],
  [[1]]
);
console.log(combinedArr);
// (14) [1, 2, 3, 'a', 'b', 'c', 4, 5, 1, 2, 3, 'Hello', 'World', Array(1)]

// ===== myArray.includes(itemToCheck) =====
const arr2 = ["a", "b", "c", "d", "e", "f"];

const isItemIncluded = arr2.includes("c"); // checks whether c is in the array.
console.log(isItemIncluded); // true
const isItemIncluded1 = arr2.includes("z");
console.log(isItemIncluded1); // false

// ===== myArray.indexOf(itemToFind) =====
const arr3 = [0, 11, 22, 33, 33, 33, 44, 55, 33, 33, 33];
const firstIndexOfItem = arr3.indexOf(33); // locates the index of 33
console.log(firstIndexOfItem);

// ===== myArray.lastIndexOf(itemToFind) =====
const lastIndexOfItem = arr3.lastIndexOf(33); // locates the last index of 33
console.log(lastIndexOfItem);

if (firstIndexOfItem === lastIndexOfItem) {
  console.log("This is a unique item");
}
if (firstIndexOfItem !== lastIndexOfItem) {
  console.log("This item is repeated, and not unique");
}
