// If the increment or decrement is written before the variable (++a or --a) => first increment and decrement operation is done, then assignment is done. It is called pre-increment pre-decrement

// If the increment or decrement is written after the variable (a++ or a--) => first assignment is done, then increment or decrement operation is done. It is called post-increment post-decrement

// Increment means => a = a + 1 => a++ | ++a
// Decrement means => a = a - 1 => a-- | --a

let a = 15;
let b = ++a;
let c = --a;
let d = ++b;
let e = d++;
let f = e--;

// a = 15
// b = 17
// c = 15
// d = 18
// e = 16
// f = 17

console.log(a, b, c, d, e, f);

let numberOfLastDigit = 787123;
console.log(`Last digit ${numberOfLastDigit % 10}`);
