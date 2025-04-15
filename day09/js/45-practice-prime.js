function calculate() {
  let num = +document.querySelector("#number").value;

  let counter = 0;

  if (num > 1 && Number.isInteger(num)) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        counter++;
        break;
      }
    }

    // counter > 0 ? document.querySelector("#result").innerText = "Not prime" : document.querySelector("#result").innerText = "Prime";

    document.querySelector("#result").innerText =
      counter > 0 ? "Not prime" : "Prime";
  } else {
    alert("Please enter a valid number.");
  }
}
