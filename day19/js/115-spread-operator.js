// Rest Operator's are used in parameters:
function findAverage(firstName, lastName, ...grades) {
  const avg = grades.reduce((acc, item) => acc + item) / grades.length;
  return `${firstName} ${lastName}'s average score is ${Math.round(avg)}`;
}

console.log(findAverage("John", "Doe", 1, 2, 3, 4, 5, 6, 7));

// ARRAY

const gradesArr = [10, 20, 30, 40, 50, 60];
// Spread Operator:
console.log(findAverage("John", "Doe", ...gradesArr));

const arr = [1, 2, 3, 4, 5];

console.log(...arr);
console.log(arr);

const newArr = arr;
console.log(newArr === arr); // true as references are the same

const anotherArr = [1];
const anotherArr2 = anotherArr.slice(); // to change the reference

console.log(anotherArr2 === anotherArr); // false as slice changes the reference!

const nums = [1, 2, 3];
const nums2 = [...nums]; // to create new reference we can use spread operator like this

console.log(nums === nums2); // false, as spread operator creates new reference

// OBJECT

const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let newObj = obj; // It does not change the reference

console.log(newObj === obj); // true
newObj.age = 11;
console.log(obj);

const student = {
  firstName: "Stu",
  lastName: "Dent",
  age: 18,
};

const newStudent = { ...student }; // It creates new reference

console.log(newStudent === student); // false, as spread operator creates new reference

const actualObj = {
  brand: "BMW",
  model: "520",
  price: 25000,
  age: 2,
};

// If you want to update or add new properties you have to write spread operator first and new/updated property last.
const updatedObject = { ...actualObj, age: 10 };
console.log(updatedObject);
console.log(actualObj);
