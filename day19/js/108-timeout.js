// setTimeout start working after specified ms later:
setTimeout(
  // callback function
  () => {
    console.log("Hello in 2000ms");
  },
  // time in ms
  2000
);

// Timeout method will return its own id, with this id we can stop the timeout by using clearTimeout method.
const timeOutId = setTimeout(() => {
  console.log("I will be visible in a second");
}, 1000);

console.log(timeOutId);
clearTimeout(timeOutId);
