const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    country: "USA",
    city: "WA",
  },
  salary: {
    base: 10000,
    bonus: 1000,
    net: 8765,
  },
};

console.log(user?.firstName);
console.log(user?.age);
console.log(user?.address.country);
console.log(user?.salary.net);

const user2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  address: {
    country: "UK",
    city: "London",
  },
  salary: null,
};

console.log(user2?.firstName);
console.log(user2?.age);
console.log(user2?.address?.country);

// If an object's key is not found, it will return undefined.
console.log(user2?.salary); // undefined

// If you try to find an object key of undefined, it will throw an error.
// console.log(user2.salary.net); // Error

// Optional chaining
console.log(user2?.salary?.net);

// Optional chaining is done with ? and it prevents error to be thrown whenever we try to get a key of undefined, it will return undefined instead of error.
