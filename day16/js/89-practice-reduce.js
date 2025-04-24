const testNumbers = [1, 3, 5, 7, 9];
const testNumbers2 = [-10, -20, -30];
const testNumbers3 = [];

function logAverage(arr) {
  // Validation
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "The input is not an array!",
    };
  } else if (arr.length === 0) {
    return {
      status: "error",
      message: "The array is empty.",
    };
  }

  const sum = arr.reduce((acc, item) => {
    let result = acc + item;
    console.log("Acc: ", result);
    return result;
  });
  const average = sum / arr.length;
  return average;
}

console.log(logAverage(testNumbers));
console.log(logAverage(testNumbers2));
console.log(logAverage(testNumbers3));
//https://github.com/jquense/yup?tab=readme-ov-file
//yup