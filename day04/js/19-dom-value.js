// DOM Elements
const usernameEl = document.querySelector("#username");
const messageEl = document.querySelector("#message");

usernameEl.value = "javascript";
const username = usernameEl.value;
messageEl.innerText = `Hello ${username}`;
// .value is used for inputs.