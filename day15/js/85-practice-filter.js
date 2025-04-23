const names = [
  "Abby",
  "Abigail",
  "John",
  "Jane",
  "George",
  "Mark",
  "Max",
  "mona",
  "albert",
];

const filterNamesByFirstLetter = (names, letter) => {
  // Validation
  if (!Array.isArray(names) || letter !== String(letter)) {
    return {
      status: "error",
      message: "Please enter valid inputs.",
    };
  }

  //   const filteredNames = names.filter((name) => name.charAt(0).toLowerCase() === letter.toLowerCase());

  const filteredNames = names.filter(
    (name) => name[0].toLowerCase() === letter.toLowerCase()
  );

  return filteredNames;
};

console.log(filterNamesByFirstLetter(names, "A"));
console.log(filterNamesByFirstLetter(names, "M"));
console.log(filterNamesByFirstLetter(names, "U"));
console.log(filterNamesByFirstLetter(names, 1));
