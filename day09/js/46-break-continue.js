for (let i = 0; i < 10; i++) {
  console.log("Before continue - ", i);
  if (i === 5) {
    console.log("Continued");
    // Continue will skip the iteration.
    continue;
  }
  console.log(i);
}

console.log("---------------");

for (let i = 0; i < 10; i++) {
  console.log("Before break - ", i);
  if (i === 5) {
    console.log("Break is used");
    // Break will stop the execution of loop.
    break;
  }

  console.log(i);
}

// Console log all of the odd numbers between 0 and 1000
for (let i = 0; i < 1000; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
