const fruit = "lemon";

// lemon === apple => false
// lemon === banana => false
// lemon === orange => false
// lemon === lemon => true => code will be executed.

switch (fruit) {
  case "apple":
    console.log("Apple is chosen");
    // break is used to quit the block.
    break;
  case "banana":
    console.log("Banana is chosen");
    break;
  case "orange":
    console.log("Orange is chosen");
    break;
  case "lemon":
    console.log("Lemon is chosen");
    break;
  default:
    console.log("There is not any fruit that you want...");
    // break just before the closing curly bracket is optional.
    break;
}

// We can put true or false as a condition.
switch (true) {
  case false:
    console.log("Not true");
    break;
  case NaN:
    console.log(NaN);
    break;
  case Boolean("false"):
    console.log("True");
    break;
  default:
    console.log("Not applied");
    break;
}
