// Write an application that combines matching index elements in two separate arrays and stores them in a separate array, using for in method.

const firstNames = ["Kevin", "Lionel", "Bukaye", "Cristiano", "Victor"];
const lastNames = ["De Bruyne", "Messi", "Saka", "Ronaldo", "Osihmen"];

/**
 * Combines matching index elements in different array and stores them in a separate array
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {string[]}
 */
const combineMatchingIndex = (arr1, arr2) => {
  // Validation
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return {
      status: "error",
      message: "Please provide array",
    };
  }

  if (arr1.length !== arr2.length) {
    return {
      status: "error",
      message: "Array lengths are not stable",
    };
  }

  let fullName = [];

  for (let index in arr2) {
    fullName.push(arr1[index].concat(" ", arr2[index]));
  }

  return fullName;
};

const fullNames = combineMatchingIndex(firstNames, lastNames);
console.log(fullNames); // ['Kevin De Bruyne', 'Lionel Messi', 'Bukaye Saka', 'Cristiano Ronaldo', 'Victor Osihmen']
