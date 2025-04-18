//  =============== EVENTS ============
// 1ST WAY
function sayHello() {
  alert("Hello 1");
}

// 2ND WAY
document.querySelector("#btnMsg").onclick = sayHello2;

function sayHello2() {
  alert("Hello 2");
}

// 3RD WAY
document.querySelector("#btnMsg2").onclick = function () {
  alert("Hello 3");
};

document.querySelector("#btnMsg2").onclick = () => {
  alert("Hello 3");
};

// 4TH WAY *
const btn3El = document.querySelector("#btnMsg3");
btn3El.addEventListener("click", sayHello3);

function sayHello3() {
  alert("Hello 4");
}

// 5TH WAY *
const btn4El = document.querySelector("#btnMsg4");
btn4El.addEventListener("click", function () {
  alert("Hello 5");
});

btn4El.addEventListener("click", () => {
  alert("Hello 5");
});
