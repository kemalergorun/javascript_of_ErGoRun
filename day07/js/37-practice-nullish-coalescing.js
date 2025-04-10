// DOM Elements
const widthEl = document.querySelector("#width");
const heightEl = document.querySelector("#height");

// Event
function calculate() {
  let width = +widthEl.value;
  let height = +heightEl.value;

  width = width || null;
  // if(!width){
  //     width = null;
  // }

  height = height || null;
  // if(!height){
  //     height = null;
  // }

  const area = (width ?? 10) * (height ?? 5);
  document.querySelector("#result").innerText = area;
}
