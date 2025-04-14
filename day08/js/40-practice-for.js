// DOM Elements
const resultEl1 = document.querySelector("#result1");
const resultEl2 = document.querySelector("#result2");
const resultEl3 = document.querySelector("#result3");

function calculate() {
  const num1 = +document.querySelector("#num1").value;
  const num2 = +document.querySelector("#num2").value;

  let countDivideByThree = 0;
  let countDivideBySeven = 0;
  let countDivideByThreeAndSeven = 0;

  for (let index = num1; index <= num2; index++) {
    if (index % 3 === 0) {
      countDivideByThree++;

      // if(index % 7 === 0 ){
      //     countDivideByThreeAndSeven++;
      // }
    }

    if (index % 7 === 0) {
      countDivideBySeven++;

      if (index % 3 === 0) {
        countDivideByThreeAndSeven++;
      }
    }

    // Alternative
    // if(index % 21 === 0){
    //     countDivideByThreeAndSeven
    // }

    // Alternative
    // if(index % 3 === 0 && index % 7 === 0){
    //     countDivideByThreeAndSeven++;
    // }
  }

  // Putting the results into resultElements.
  resultEl1.innerText = `There are ${countDivideByThree} numbers that can be divided by 3, between ${num1} and ${num2} `;
  resultEl2.innerText = `There are ${countDivideBySeven} numbers that can be divided by 7, between ${num1} and ${num2}`;
  resultEl3.innerText = `There are ${countDivideByThreeAndSeven} numbers that can be divided by both 3 and 7, between ${num1} and ${num2}`;
}
