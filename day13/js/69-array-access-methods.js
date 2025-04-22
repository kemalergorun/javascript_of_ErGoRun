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

// What if there is no searched item
const notFoundItem = arr3.indexOf("...");
console.log(notFoundItem); // -1
const notFoundItemLastIndex = arr3.lastIndexOf("...");
console.log(notFoundItemLastIndex); // -1

// ===== myArray.join(separator) =====
const arr4 = ["H", "E", "L", "L", "O"];
const joinedArray = arr4.join(" - "); // converts array into string by using seperator.
console.log(typeof joinedArray); // string

const joinedArray1 = arr4.join();
console.log(joinedArray1); // H,E,L,L,O

const joinedArray2 =arr4.join("");
console.log(joinedArray2);

const arr5 = ["I", "love", "going", "out"];
const joinedArray3 = arr5.join(" ");
console.log(joinedArray3);

// Palindrome checker:
let number = 1112111;
console.log(+number.toString().split("").reverse().join("") === number);

let word = "abba";
console.log(word.split("").reverse().join("") === word ? "Palindrome": "Not Palindrome");

// ===== myArray.toString() =====
const arr6 = ["I" , "do", "not", "know"];
const stringedArray = arr6.toString(); // converts array into string by separating each of the item with ","
console.log(stringedArray); // I,do,not,know
const localeStringedArray = arr6.toLocaleString(); // converts array into string by separating each of the item with ","
console.log(localeStringedArray); // I,do,not,know

// ===== myArray.slice(startIndex, endIndex) ===
const arr7 = ["A", "B", "C", "D", "E", "F"];
const slicedArray = arr7.slice(3,5); // gets the startIndex item (inclusive) to endIndex item (exclusive)
console.log(slicedArray); // ['D', 'E']
const slicedArray2 = arr7.slice(1); // if end index is not provided, it will slice until the end.
console.log(slicedArray2); 