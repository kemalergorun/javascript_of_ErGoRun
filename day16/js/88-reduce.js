// reduce() method reduces the array to a single value.
// The return value of the function is stored in an accumulator (result/total)
// The accumulator is remembered in each iteration throughout the array and ultimately becomes the final single result.
// initial value => the first value to start the accumulator with. If the initial value is not provided, the first element in the array will be used as the initial value!

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let sum1 = 0;
for (let num in numbers) {
  sum1 += numbers[num];
}
let sum2 = 0;
for (let num of numbers) {
  sum2 += num;
}

console.log(sum);
console.log(sum1);
console.log(sum2);

let sum3 = numbers.reduce((accumulator, currentArrayItem, currentIndex) => {
  console.log("accumulator: ", accumulator);
  console.log("currentArrayItem: ", currentArrayItem);
  console.log("currentIndex: ", currentIndex);

  let result = accumulator + currentArrayItem;
  return result;
}, 0);

console.log(sum3); // 15

// ===========================================
const sum4 = numbers.reduce((acc, item) => acc + item);
console.log(sum4); // 15

// ===========================================
const multiply = numbers.reduce((acc, item) => acc * item, 1);
console.log(multiply);

// ===========================================
document.querySelector("#list").innerHTML = numbers.reduce((acc, item) => {
  console.log(acc);
  return acc + `<li> ${item} </li>`;
}, "");

// 1- "" + li
// 2- li + li
// 3- 2*li + li
// 4- 3*li + li
// 5- 4*li + li
