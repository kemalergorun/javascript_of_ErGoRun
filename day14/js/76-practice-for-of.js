import countries from "../data/countries.js";

// DOM Elements
const selectEl = document.querySelector("#countries");

const loadData = (arr) => {

    // Validation
    if(!Array.isArray(arr)){
        return {
            status: "error",
            message: "Please provide an array"
        };
    }

    for(const item of arr){
        // selectEl.innerHTML += `
        // <option> ${item} </option>
        // `;

        // Safer way:
        const optionEl = document.createElement("option");
        optionEl.innerText = item;
        selectEl.appendChild(optionEl);
    }

}

loadData(countries);