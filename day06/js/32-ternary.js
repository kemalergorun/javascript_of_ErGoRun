let number = 500;

// if(number > 400){
//     console.log("Number is a big number");
// } else{
//     console.log("Number is a small number");
// }

number > 400 ? console.log("Big number") : console.log("Small number");

// DOM Elements
const gradeContainerEl = document.querySelector("#gradeContainer");
const gradeEl = document.querySelector("#gradeContainer span");

let grade = +gradeEl.innerText;

// if(grade > 50){
//     gradeContainerEl.classList.add("success");
// } else{
//     gradeContainerEl.classList.add("danger");
// }

// grade > 50
//     ? gradeContainerEl.classList.add("success")
//     : gradeContainerEl.classList.add("danger");

gradeContainerEl.classList.add(grade > 50 ? "success" : "danger");
