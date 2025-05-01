// Destructuring is a JS syntax that allows us to unpack values from array or properties from object into distinct values:

// OBJECT
// We have to use exactly the same key name as in Object, the order does not matter tho.
let age = 10;

const myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 54,
  eyeColor: "blue",
};

const myString = `My name is ${myObject.firstName} ${myObject.lastName} and I am ${myObject.age} years old, and my eye color is ${myObject.eyeColor}`;

console.log(myString);

// Destructuring allows to create variables from the object properties
//                              renaming          default
let {
  firstName = "Jack",
  lastName,
  age: objAge,
  eyeColor,
  height = "6",
} = myObject;

/**
 * let firstName = "John"
 * let lastName = "Doe"
 * let objAge = 54
 * let eyeColor: "blue"
 * let height = "6"
 */

console.log(firstName, lastName, objAge, eyeColor, height);
console.log(myObject);

const user = {
  name: "Tom",
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

let {
  address: { city, state },
  name,
} = user;
console.log(city, state);
// ARRAY

const myArray = ["Mercedes", "Audi", "BMW", "Ford"];

const myString2 = `I have ${myArray[0]} and ${myArray[1]}, but not ${myArray[2]} and ${myArray[3]}`;
console.log(myString2);

// When destructuring arrays, the order of the variables IMPORTANT! The order of variables must match with the order of elements in the array. On the other hand, name of the variables does not matter at all. 
const [first, second, third, fourth] = myArray;

console.log(first, second, third, fourth);


const menu = ["burger", "pizza", "milkshake", "apple pie"];

// , will skip the item
const [burger,,,pie] = menu;
console.log(burger, pie);

// We can use rest operator to gather destructured data:
const [bur, piz, ...rest] = menu;
console.log(rest); // ['milkshake', 'apple pie']


// Destructuring in function parameters

function printUserInfo({id, token}){
    console.log(id, token);
}

const admin = {
    id: 1,
    token: "evy...",
    name: "John",
    age: 33,
    email: "john@doe.com"
}

printUserInfo(admin)






