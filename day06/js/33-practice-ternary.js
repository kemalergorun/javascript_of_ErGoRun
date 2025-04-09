// DOM Elements
const salaryEl = document.querySelector("#salary");
const resultEl = document.querySelector("#result");

// Manipulation
function setSalary() {
  const statusEl = document.querySelector("input[name='status']:checked");

  const status = statusEl ? statusEl.value : "";
  const salary = +salaryEl.value;

  const updatedSalary = status === "retired" ? salary * 0.9 : salary;

  resultEl.innerText = `This person's salary is ${updatedSalary}`;
}
