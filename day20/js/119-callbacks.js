// A callback is a function that you pass an argument to another function

// Job 1
function giveOrder(callback) {
  console.log("Your order is received");

  callback("This is callback argument");
}
// Job 2
function getBaklava() {
  console.log("Baklava is bought");
}

giveOrder((params) => {
  getBaklava();
  console.log(params);
});

// Let us find the difference between two array numbers sum
function findDifference(arr1, arr2, callback) {
  const sum1 = callback(arr1);
  const sum2 = callback(arr2);

  console.log("Difference: ", Math.abs(sum1 - sum2));
}

const findSumOfArr = (arr) => {
  return arr.reduce((acc, item) => acc + item);
};

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [5];

findDifference(numbers1, numbers2, findSumOfArr);
