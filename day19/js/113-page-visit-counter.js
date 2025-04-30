// DOM Element
const counterEl = document.getElementById("visitCount");

// Function
function counterVisit() {
  // Retrieve the number of visits from local storage
  let visits = localStorage.getItem("visits");

  //   Increment the visit count from local storage
  visits = visits ? +visits + 1 : 1;

  // Store the updated visit count in the local storage
  localStorage.setItem("visits", visits);

  // Update the DOM
  counterEl.innerText = visits;
}

// Call the function
window.onload = counterVisit;
// counterVisit();

//console.log(localStorage.getItem("23"));
