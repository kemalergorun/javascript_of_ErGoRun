// Array Data
const numbers = [934, 219, 3, 10, 945, 123];

// DOM Elements
const btnCalculateEl = document.querySelector("#btnCalculate");
const resultEl = document.querySelector("#result");
const numbersEl = document.querySelector("#numbers");
const discountEl = document.querySelector("#discountRate");

// Event Listener
btnCalculateEl.addEventListener("click", () => {

    let numbersString = numbersEl.value;
    let numberStringArr = numbersString.split(" ");
    let numberArr = numberStringArr.map((str) => parseInt(str));
    console.log(numberArr);

    const discountRate = +discountEl.value;
    const increasedNumbersArray = increaseArrayItems(numberArr, discountRate);

    if(increasedNumbersArray.status === "error"){
        resultEl.innerText = increasedNumbersArray.message;
        return;
    }

    resultEl.innerText = `Increased Array Items: ${increasedNumbersArray}`
})

// Function
function increaseArrayItems(arr, rate){
    // Validation
    if(!Array.isArray(arr)){
        return {
            status: "error",
            message: "Invalid input"
        }
    }

    let updatedPrices = new Array(); // [];
    for(let index = 0; index < arr.length; index++ ){
        updatedPrices[index] = arr[index] + (arr[index] * rate / 100);
    }

    return updatedPrices;
}





















