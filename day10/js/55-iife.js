// IIFE - (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
  console.log("Hello IIFE");
})();

!(function () {
  console.log("Hello IIFE 2");
})();

(() => {
  console.log("Hello IIFE 3");
})();
