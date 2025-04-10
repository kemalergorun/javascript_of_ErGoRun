let user = null;
console.log(user);
console.log(user ?? "Guest");
console.log("Anonymous" ?? user);
console.log(null ?? undefined); // undefined => it will return last one

function login() {
  let user = prompt(
    "Please enter your name. If you do not want to register you can cancel."
  );
  document.querySelector("button").innerText = user ?? "Guest";
}
