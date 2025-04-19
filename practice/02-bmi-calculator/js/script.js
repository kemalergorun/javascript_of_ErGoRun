// DOM Elements
const indicator = document.querySelector("#indicator");
const indicatorLabel = indicator.querySelector("label");
const txtWeight = document.querySelector("#txtWeight");
const txtHeight = document.querySelector("#txtHeight");

function getBMI() {
  // Getting the input values and converting to numbers
  const weight = +txtWeight.value;
  const height = +txtHeight.value;

  // Validation
  let isValid = true;
  txtWeight.parentElement.classList.remove("invalid");
  txtHeight.parentElement.classList.remove("invalid");

  if (!weight || weight <= 0 || weight > 500) {
    txtWeight.parentElement.classList.add("invalid");
    isValid = false;
  }

  if (!height || height <= 0 || height > 300) {
    txtHeight.parentElement.classList.add("invalid");
    isValid = false;
  }

  if (!isValid) return;

  //   Calculating BMI = bmi = kg / (m * m)
  const bmi = weight / (height / 100) ** 2;

  // Setting the indicator
  const leftPosition = bmi > 50 ? 100 : bmi * 2;
  indicator.style.left = `${leftPosition}%`;
  indicatorLabel.innerText = bmi.toFixed(0);

  if (leftPosition > 50) {
    indicatorLabel.style.left = "-5px";
    indicatorLabel.style.transform = "translateX(-100%)";
  } else {
    indicatorLabel.style.left = "20px";
    indicatorLabel.style.transform = "translateX(0)";
  }
}
