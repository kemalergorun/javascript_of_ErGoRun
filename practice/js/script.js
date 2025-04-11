function calculate() {
  // Getting the input elements
  const dayInputEl = document.querySelector("#day");
  const monthInputEl = document.querySelector("#month");
  const yearInputEl = document.querySelector("#year");
  // Getting the result element
  const resultEls = document.querySelectorAll(".result > p");

  // Validations for inputs
  if (
    +dayInputEl.value > 31 ||
    +dayInputEl.value < 1 ||
    isNaN(+dayInputEl.value)
  ) {
    alert("Invalid day");
    return;
  }

  if (
    +monthInputEl.value > 12 ||
    +monthInputEl.value < 1 ||
    isNaN(+monthInputEl.value)
  ) {
    alert("Invalid month");
    return;
  }

  // Date methods
  let currentDate = new Date();

  /*
        Jan => 0
        Feb => 1
        Mar => 2
        Apr => 3
        May => 4
        Jun => 5
        Jul => 6
        Aug => 7
        Sep => 8
        Oct => 9
        Nov => 10
        Dec => 11
    */

  // Get the current date information:
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  // Validation for year
  if (+yearInputEl.value >= currentYear || isNaN(+yearInputEl.value)) {
    alert("Invalid year");
    return;
  }

  console.log(currentDay, currentMonth, currentYear);

  let birthDay = currentDay - +dayInputEl.value;
  let birthMonth = currentMonth - +monthInputEl.value;
  let birthYear = currentYear - +yearInputEl.value;

  // Correct negative values:
  if (birthDay < 0) {
    birthDay += 31;
    birthMonth--;
  }
  if (birthMonth < 0) {
    birthMonth += 12;
    birthYear--;
  }

  console.log(birthDay, birthMonth, birthYear);

  resultEls[0].innerText =
    birthDay > 1 ? `${birthDay} days` : `${birthDay} day`;

  resultEls[1].innerText =
    birthMonth > 1 ? `${birthMonth} months` : `${birthMonth} month`;

  resultEls[2].innerText =
    birthYear > 1 ? `${birthYear} years` : `${birthYear} year`;
}
