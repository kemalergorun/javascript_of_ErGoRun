// ===== for ======
const numbers = [53, 1, 23, 43, 13, 34, 5];
const numbers2 = [1, 1, 1, 1, 1, 1, 1];

/**
 * Find sum of array elements
 * @param {Array} arr
 * @returns {Number}
 */
function findSumInArray(arr) {
  // Validation
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Please provide an array.",
    };
  }

  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
}

const sumOfArray = findSumInArray(numbers);
console.log(sumOfArray);
console.log(findSumInArray(numbers2));

const notValidatedArray = findSumInArray(123);

if (notValidatedArray.status === "error") {
  console.log(notValidatedArray.message);
}
