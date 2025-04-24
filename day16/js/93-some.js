// some() checks whether any of the array items are passing a condition or not. If any of them passes the condition it will return true, otherwise it will return false.

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [5, 10, -10, 5, 9];
const numbers3 = [-1, -2, -3, -4, -5];

/**
 * Checks if at least one or more items in an array are positive or not.
 * @param {number[]} array
 * @returns {string}
 */

function isSomeItemPositive(arr) {
  // Validation
  if (!Array.isArray(arr)) return "Invalid Input.";
  if (arr.length === 0) return "Empty array.";

  const isPositive = arr.some((item, index, array) => {
    console.log("Item: ", item);
    console.log("Index: ", index);
    console.log("Array: ", array);

    return item > 0;
  });

  return isPositive
    ? "At least one item is positive"
    : "None of the items are positive";
}

console.log(isSomeItemPositive(numbers)); // At least one item is positive
console.log(isSomeItemPositive(numbers2)); // At least one item is positive
console.log(isSomeItemPositive(numbers3)); // None of the items are positive
