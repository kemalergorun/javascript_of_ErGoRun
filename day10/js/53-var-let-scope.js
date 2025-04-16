// Var cannot understand block scope.

function foo() {
  // Function Scope
  var a = "Function a";
  let b = "Function b";

  if (true) {
    // Block Scope:
    var x = "Block var";
    let y = "Block let";
  }

  console.log(x); // Block var
  //   console.log(y); // ReferenceError: y is not defined
}

foo();
// console.log(a); //  ReferenceError: a is not defined
// console.log(b); //  ReferenceError: b is not defined
// console.log(x); // ReferenceError: x is not defined
