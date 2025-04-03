const year = 2025;
const dadBirthYear = 1966;
const dadAge = year - dadBirthYear;

console.log("Age: " + dadAge); // Age: 59
console.log("Age: " + year - dadBirthYear); // NaN

console.log("Age: " + (year - dadBirthYear)); // Age: 59
console.log(`Age: ${year - dadBirthYear}`); // Age: 59

// Why should we use string literal instead of string concatenation:
const firstWord = "I";
const secondWord = "have";
const thirdWord = "a";
const fourthWord = "dog";

console.log(firstWord + " " + secondWord + " " + thirdWord + " " + fourthWord);

console.log(`${firstWord} ${secondWord} ${thirdWord} ${fourthWord}`);
