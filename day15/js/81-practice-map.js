// Write all of the strings with uppercase:

const names = ["Alex", "John", "Hagrid", "Aragorn", "Jack", "Galadriel"];

const resultNames = names.map((item) => {
  return item.toUpperCase();
});

console.log(resultNames);

// With For Each

let resultNames2 = [];

names.forEach((item) => {
  resultNames2.push(item.toUpperCase());
});

console.log(resultNames2);
