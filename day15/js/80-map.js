const myArray = [2, 4, 6, 8, 10];

// .map() can be used with return!
const returnOfMap = myArray.map((item, index, array) => {
  console.log(`
        map:
        Item: ${item}
        Index: ${index}
        Array: ${array}
        `);

  return item * 5;
});

console.log(returnOfMap); // [10, 20, 30, 40, 50]

const returnOfForEach = myArray.forEach((item, index, array) => {
  console.log(`
        forEach:
        Item: ${item}
        Index: ${index}
        Array: ${array}
        `);

  return item * 5;
});

console.log(returnOfForEach); // undefined
