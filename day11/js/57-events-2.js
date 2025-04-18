// DOM Elements
const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");

// Events
input1El.addEventListener("input" , (e) => {
    console.log(e);
} );


input2El.addEventListener("change", (e) => {
    console.log(e.target.value);
})


document.addEventListener("keydown", (event) => {
    console.log(event);

    if (event.key === "w") {
      document.querySelector("#down").classList.add("d-none");
      document.querySelector("#left").classList.add("d-none");
      document.querySelector("#right").classList.add("d-none");
      document.querySelector("#up").classList.remove("d-none");
    } else if (event.key === "d") {
      document.querySelector("#down").classList.add("d-none");
      document.querySelector("#left").classList.add("d-none");
      document.querySelector("#right").classList.remove("d-none");
      document.querySelector("#up").classList.add("d-none");
    } else if (event.key === "a") {
      document.querySelector("#down").classList.add("d-none");
      document.querySelector("#left").classList.remove("d-none");
      document.querySelector("#right").classList.add("d-none");
      document.querySelector("#up").classList.add("d-none");
    } else if (event.key === "s") {
      document.querySelector("#down").classList.remove("d-none");
      document.querySelector("#left").classList.add("d-none");
      document.querySelector("#right").classList.add("d-none");
      document.querySelector("#up").classList.add("d-none");
    }
})





















