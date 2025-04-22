const myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let key in myObject) {
  console.log(key); // for keys
  console.log(myObject[key]); // for values
}
