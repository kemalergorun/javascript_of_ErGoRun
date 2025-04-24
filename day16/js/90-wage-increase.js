// Write a program according to the following information:
// A company wants to raise the salaries of their employees by 10%, whose original salary is less than 3000$. And wants to know how much these employees are going to get paid in total.

// Data
const employees = [
  {
    id: 1,
    name: "Alice",
    salary: 2800,
  },
  {
    id: 2,
    name: "Bob",
    salary: 3500,
  },
  {
    id: 3,
    name: "Charles",
    salary: 2900,
  },
  {
    id: 4,
    name: "David",
    salary: 2200,
  },
  {
    id: 5,
    name: "Eve",
    salary: 3200,
  },
];

function calculateTotalPayroll(arr) {
  // Validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      status: "error",
      message: "Invalid input",
    };
  }

  // // Filter the salaries below 3000$:
  // const filteredEmployees = arr.filter((item) => item?.salary < 3000);
  // console.log(filteredEmployees);

  // // Increase filtered salaries by 10%:
  // const increasedSalaries = filteredEmployees.map((employee) => Math.round(employee.salary * 1.1));
  // console.log(increasedSalaries);

  // // Calculating the total:
  // const totalPayroll = increasedSalaries.reduce((acc, item) => acc+item);

  // Pipeline Method:
  const totalPayroll = arr
    .filter((item) => item.salary < 3000)
    .map((item) => Math.round(item.salary * 1.1))
    .reduce((acc, item) => acc + item);

  return {
    status: "success",
    data: totalPayroll,
  };
}
const response = calculateTotalPayroll(employees);

if (response.status === "error") {
  console.log(response.message);
} else {
  console.log("Total Payroll:", response.data);
}