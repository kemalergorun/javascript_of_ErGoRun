// Write a program that show the total area of listed countries

// Data
const countries = [
  {
    name: "Unites States",
    area: 9833520,
  },
  {
    name: "Canada",
    area: 9984670,
  },
  {
    name: "Greenland",
    area: 2166086,
  },
  {
    name: "Australia ",
    area: 7688287,
  },
  {
    name: "New Zealand",
    area: 268680,
  },
];

function calculateTotalArea(arr) {
  // Validation
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Please provide an array.",
    };
  } else if (arr.length === 0) {
    return {
      status: "error",
      message: "Array is empty.",
    };
  }

  const totalArea = arr.reduce((acc, item) => acc + item?.area, 0);

  const formattedTotalArea = totalArea.toLocaleString("en-US");
  // formattedTotalArea is string, so be careful.

  // Another way:
  // const formattedTotalAreaTr = new Intl.NumberFormat("tr-TR").format(totalArea)

  return {
    status: "success",
    data: formattedTotalArea,
  };
}

const response = calculateTotalArea(countries);
console.log(response?.data);
