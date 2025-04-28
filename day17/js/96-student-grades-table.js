// Data
const students = [
  {
    id: 1,
    name: "Kemal",
    grade: 100,
  },
  {
    id: 2,
    name: "Mohammed",
    grade: 100,
  },
  {
    id: 3,
    name: "Sarah",
    grade: 78,
  },
  {
    id: 4,
    name: "Sean",
    grade: 67,
  },
  {
    id: 5,
    name: "Joe",
    grade: 3,
  },
  {
    id: 6,
    name: "Ruby",
    grade: 18,
  },
  {
    id: 7,
    name: "Mark",
    grade: 51,
  },
  {
    id: 8,
    name: "Kevin",
    grade: 44,
  },
  {
    id: 9,
    name: "Moe",
    grade: 84,
  },
  {
    id: 10,
    name: "Jack",
    grade: 91,
  },
];

// DOM Elements
const tableEl = document.getElementById("studentsTable");
const btnEl = document.getElementById("btnShow");

// Function
function populateTable() {
  // First create tbody
  // Second create tr
  // Third create td for each field in array
  // Fourth append accordingly
  // Last append all to tableEl

  tableBodyEl = document.createElement("tbody");
  tableBodyEl.classList.add("text-center");

  students.forEach((student) => {
    const tableRowEl = document.createElement("tr");
    // Create table data for the index
    const tableDataIdEl = document.createElement("td");
    tableDataIdEl.innerText = student.id;

    // Create table data for name
    const tableDataNameEl = document.createElement("td");
    tableDataNameEl.innerText = student.name;

    // Create table data for grade
    const tableDataGradeEl = document.createElement("td");
    tableDataGradeEl.innerText = student.grade;
    // As task wants us to manipulate grade, we need to make it distinctive
    tableDataGradeEl.classList.add("grade");

    tableRowEl.appendChild(tableDataIdEl);
    tableRowEl.appendChild(tableDataNameEl);
    tableRowEl.appendChild(tableDataGradeEl);

    tableBodyEl.appendChild(tableRowEl);
  });

  tableEl.appendChild(tableBodyEl);
}

populateTable();

btnEl.addEventListener("click", () => {
  // Set the colors:
  setColorForLowGrades();
});

function setColorForLowGrades() {
  const tableRowsNodeList = tableEl.querySelectorAll("tbody tr");

  // NodeList is not used with array iterator methods. So we need to make it an array:
  const tableRows = Array.from(tableRowsNodeList);

  console.log(tableRows);

  tableRows.forEach((row) => {
    console.log(row);

    // We need to pick every grade item
    const grade = +row.querySelector(".grade").innerText;

    if (grade < 50) {
      row.classList.add("table-danger");
    }
  });
}
