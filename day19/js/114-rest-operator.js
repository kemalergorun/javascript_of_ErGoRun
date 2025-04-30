function sum(numbers) {
  return numbers.reduce((acc, item) => acc + item);
}

function sumOfTwo(num1, num2) {
  return num1 + num2;
}

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Rest operator gathers all the items into an array, so it can be manipulated as such:
function sumAll(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, item) => acc + item);
}

const numbers = [1, 2, 3];
console.log(sum([numbers]));

console.log(sumOfTwo(5, 5));
console.log(sumOfThree(5, 5, 5));

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 9, 100, 123, 234, 123));

// Find average of a student's grades along with student name
// We have to put rest operator as the last parameter otherwise we cannot access other parameters:
function findAverage(firstName, lastName, ...grades) {
  const sum = grades.reduce((acc, item) => acc + item, 0);

  const avg = Math.round(sum / grades.length);

  return `${firstName} ${lastName}'s average is ${avg}`;
}

console.log(findAverage("John", "Doe", 100, 54, 34, 22, 85, 73, 31, 52, 64));
