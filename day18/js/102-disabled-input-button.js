// DOM Elements
const idInputEl = document.getElementById("id");
const buttonUpdateEl = document.getElementById("btnUpdate");
const passwordInputEl = document.getElementById("password");
const togglePasswordEl = document.getElementById("btnTogglePassword");

buttonUpdateEl.setAttribute("disabled", true);

idInputEl.addEventListener("input", (e) => {
  const id = e.target.value;
  // console.log(id);
  // console.log(!id);

  if (!id) {
    buttonUpdateEl.setAttribute("disabled", true);
  } else {
    buttonUpdateEl.removeAttribute("disabled");
  }
});

togglePasswordEl.addEventListener("click", () => {
  const iconEl = togglePasswordEl.querySelector("i");

  if (passwordInputEl.getAttribute("type") === "password") {
    passwordInputEl.setAttribute("type", "text");
    togglePasswordEl.setAttribute("title", "Hide Password");
    iconEl.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInputEl.type = "password";
    togglePasswordEl.title = "Show Password";
    iconEl.classList.replace("fa-eye-slash", "fa-eye");
  }
});
