// every() checks whether all of the array items are passing a condition or not. If all of them without exception passes the condition it will return true, otherwise it will return false.

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [5, 10, -10, 5, 9];
const numbers3 = [-1, -2, -3, -4, -5];

/**
 * Checks if all items in an array are positive or not.
 *  @param {number[]} arr
 * @returns {string}
 */
function isEveryItemPositive(arr) {
  // Validation
  if (!Array.isArray(arr)) return "Invalid Input";
  if (arr.length === 0) return "Array is empty";

  const isPositive = arr.every((item, index, array) => {
    console.log("Item: ", item);
    console.log("Index: ", index);
    console.log("Array: ", array);

    return item >= 0;
  });

  return isPositive ? "All items are positive" : "Not all items are positive";
}

console.log(isEveryItemPositive(numbers));
console.log(isEveryItemPositive(numbers2));
console.log(isEveryItemPositive(numbers3));

// Short way:
// const isPositive = arr.every((item) => item > 0);
