// DOM Elements
const formEl = document.querySelector("form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

formEl.addEventListener("submit", (e) => {
  // Prevent the default form submission refreshment:
  e.preventDefault();

  // console.log(e.target);

  const email = emailEl.value;
  const password = passwordEl.value;

  console.log(email, password);

  // TODO remove prev messages
  const existingMessage = formEl.nextElementSibling;
  if (!!existingMessage) {
    existingMessage.remove();
  }

  try {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      throw new Error("Email field cannot be empty");
    }

    if (!password) {
      throw new Error("Password field cannot be empty");
    }

    const messageEl = document.createElement("p");
    messageEl.innerText = "You have successfully login!";
    messageEl.setAttribute("class", "alert alert-success text-success mt-3");
    formEl.after(messageEl);
  } catch (error) {
    const messageEl = document.createElement("p");
    messageEl.innerText = error.message;
    messageEl.setAttribute("class", "alert alert-danger text-danger mt-3");
    formEl.after(messageEl);
  }
});
