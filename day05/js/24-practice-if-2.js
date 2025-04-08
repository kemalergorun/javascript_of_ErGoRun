// DOM Element
const booleanValueEl = document.querySelector("p.alert");

let a = 10;
a = null;
a = " ";
a = "";
a = 0;
a = 1;
a = -0;
a = NaN;
a = "false";
a = {};
a = { salary: 1000 };
a = [];
a = Infinity;

if (a) {
  // Boolean(a) === true => code block will be applied.
  booleanValueEl.innerText = `${a} is a truthy value.`;
  booleanValueEl.classList.add("alert-success");
}

if (!a) {
  // Boolean(!a) === true => code block will be applied
  booleanValueEl.innerText = `${a} is a falsy value.`;
  booleanValueEl.classList.add("alert-danger");
}
