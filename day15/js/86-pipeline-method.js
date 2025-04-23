// If you call more than one method at the same time, it is called pipeline method.

const arr = ["John", 100, "Mark", 55, "Jane", 235, 12, 233, "Kevin"];

const namesFilteredAndCapped = arr
  .filter((item) => isNaN(item))
  .map((item) => item.toUpperCase());

console.log(namesFilteredAndCapped);

// Short way with pipeline:
const numbersMultipliedFive = arr
  .filter((item) => !isNaN(item))
  .map((item) => item * 5);

// Long way without pipeline:
const numbersMultipliedFive1 = arr.filter((item) => !isNaN(item));
const numbersMultipliedFive2 = numbersMultipliedFive1.map((item) => item * 5);

console.log(numbersMultipliedFive);

console.log(numbersMultipliedFive2);

// ======= PRACTICE =========
const coordinates = [-100, 150, -32, 43, -20];

const filterAndConvertCoordinates = (coordinates) => {
  // Validation
  if (!Array.isArray(coordinates)) {
    return {
      status: "error",
      message: "Invalid input",
    };
  }

  // return coordinates.filter((coordinate) => coordinate < 0).map((coordinate) => coordinate * -1);

  return coordinates
    .filter((coordinate) => coordinate < 0)
    .map((coordinate) => Math.abs(coordinate));
};

const resultArr = filterAndConvertCoordinates(coordinates);
console.log(resultArr);
