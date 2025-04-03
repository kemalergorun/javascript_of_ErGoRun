// ======== VARIABLES ========
var num; // Declaration
console.log(num); // undefined
num = 10; // Initialization
console.log(num);
num = 20; // Re-initialization - Re-assignment
console.log(num);

let average; // Declaration
average = 15; // Initialization
console.log(average);
average = 25;
console.log(average);

// const valueAddedTax; This will throw an error because we cannot declare a constant without initializing it.
const valueAddedTax = 0.18; // Declaration + Initialization
console.log(valueAddedTax);
// valueAddedTax = .16; No re-assignment!
