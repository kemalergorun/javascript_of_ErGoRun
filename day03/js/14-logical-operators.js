console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("-------------");

// With && operator, we simply look for the false value,
// 1- If we cannot find any false value, we return the last variable's value
// 2- If we find a false value, we return the false variable's value

let x = 10;
let y = 20;

console.log(x && y);

let a = 0;
let b = 15;
console.log(a && b);
// Boolean(a) => false
// We have the a value is false, so we do not need to check the other value.

let c = 13;
let d = undefined;
console.log(c && d);
// Boolean(c) => true
// We have the c value is true, so we can move on and take a look at the other value
// Boolean(d) => false;
// We have the d value is false, so the result will be the false variable's value.

// With || operator, we simply look for the true value
// 1- If we cannot find any true value, we return the last variables value
// 2- If we find a true value, we return the true variable's value

let m = 27;
let n = "";
console.log(m || n);
// Boolean(m) => true
// We have the m value true, so we do not need to check the other value
// m || n => 27

let p = 0;
let q = null;
console.log(p || q); // null
// Boolean(p) => false
// We have the p value is false, so we can move on and take a look at the other values
// Boolean(q) => false
// We have both p and q values are false, so the result will be the last variable's value

let r = 0;
let s = 1;

console.log(!r);
console.log(!!r); // Boolean(r)
console.log(!s);
console.log(!!s); // Boolean(s)
