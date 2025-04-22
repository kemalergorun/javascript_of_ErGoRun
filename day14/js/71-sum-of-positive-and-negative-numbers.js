// Write a program that finds the sum of positive and negative numbers in an array, then returns the difference between them.

const numbers = [-1, -2, -3, 4, 5, 6];
const numbers1 = [-3211, -2123, -3543, 894, 3215, 346];

/**
 * Finds the sum of positive and negative numbers in an array, then returns the difference between these two
 * @param {Number[]} arr
 * @returns {Number | status: string, message: string}
 */
function findDiffBetweenPositiveAndNegative(arr) {
  // Validation
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Invalid input",
    };
  }

  let positiveSum = 0;
  let negativeSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? (positiveSum += arr[i]) : (negativeSum += arr[i]);

    // if (arr[i] > 0) {
    //   positiveSum += arr[i];
    // } else {
    //   negativeSum += arr[i];
    // }
  }

  console.log("Sum of positives: ", positiveSum);
  console.log("Sum of negatives: ", negativeSum);

  return positiveSum - negativeSum;
}

const difference = findDiffBetweenPositiveAndNegative(numbers);

console.log(difference); // 21
console.log(findDiffBetweenPositiveAndNegative(numbers1)); // 13332
