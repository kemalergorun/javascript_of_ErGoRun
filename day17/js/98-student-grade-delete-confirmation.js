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
const btnShowEl = document.getElementById("btnShow");
// ***

tableEl.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("delete-btn")) {
    // const studentName = e.target.closest("tr").children[1].innerText;

    const studentName =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText;

    confirm(`Are you sure you want to delete ${studentName}`);
  }
});

function populateTable() {
  const tBodyEl = document.createElement("tbody");
  tBodyEl.classList.add("text-center");

  students.forEach((student) => {
    const tREl = document.createElement("tr");

    const tableDataIdEl = document.createElement("td");
    tableDataIdEl.innerText = student.id;

    const tableDataNameEl = document.createElement("td");
    tableDataNameEl.innerText = student.name;

    const tableDataGradeEl = document.createElement("td");
    tableDataGradeEl.classList.add("grade");
    tableDataGradeEl.innerText = student.grade;

    // To create delete buttons we need td as well:
    const tableDataButtonEl = document.createElement("td");
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("btn", "btn-danger", "delete-btn");

    // Create trash icon
    const trashIconEl = document.createElement("i");
    trashIconEl.classList.add("fa-solid", "fa-trash");

    // Appending trash icon into button
    buttonEl.appendChild(trashIconEl);
    // Appending the button into table data(td)
    tableDataButtonEl.appendChild(buttonEl);

    tREl.append(
      tableDataIdEl,
      tableDataNameEl,
      tableDataGradeEl,
      tableDataButtonEl
    );

    tBodyEl.appendChild(tREl);
  });

  tableEl.appendChild(tBodyEl);
}

populateTable();

btnShowEl.addEventListener("click", () => {
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
