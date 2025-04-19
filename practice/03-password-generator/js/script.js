// DOM Elements
const lblPassword = document.querySelector("#lblPassword");
const btnCopy = document.querySelector("#btnCopy");
const lblCharLength = document.querySelector("#lblCharLength");
const rangeCharLength = document.querySelector("#rangeCharLength");
const chkUppercase = document.querySelector("#chkUppercase");
const chkLowercase = document.querySelector("#chkLowercase");
const chkNumbers = document.querySelector("#chkNumbers");
const chkSymbols = document.querySelector("#chkSymbols");
const lblStrength = document.querySelector("#lblStrength");
const btnGenerate = document.querySelector("#btnGenerate");

// Events
btnGenerate.addEventListener("click", () => {
  // Getting input values:
  const passwordLength = +rangeCharLength.value;
  const hasUpperCase = chkUppercase.checked;
  const hasLowerCase = chkLowercase.checked;
  const hasNumber = chkNumbers.checked;
  const hasSymbol = chkSymbols.checked;

  const passwordParams = {
    passwordLength,
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSymbol,
  };

  // Validation
  const resValidation = validateInputs(passwordParams);
  if (!resValidation) return;

  // Generate password
  const password = generatePassword(passwordParams);
  lblPassword.innerText = password;

  //   Create strength
  const strengthPoint = getStrengthPoint(passwordParams);
  const strengthText = getStrengthText(strengthPoint);
  lblStrength.innerHTML = strengthText;
});

// To show output of range on char length label
rangeCharLength.addEventListener("change", (e) => {
  lblCharLength.innerText = e.target.value;
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(lblPassword.innerText);
});

// Function to copy the password
const copyToClipboard = async (text) => {
  // Browser Web API
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};

// Function for generating password according to inputs sent.
const generatePassword = (params) => {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_{|}~`\"";
  let allChars = "";
  let password = "";

  if (params.hasUpperCase) allChars += upperCaseLetters;
  if (params.hasLowerCase) allChars += lowerCaseLetters;
  if (params.hasNumber) allChars += numbers;
  if (params.hasSymbol) allChars += symbols;

  for (let i = 0; i < params.passwordLength; i++) {
    password += getRandomChar(allChars);
  }

  password = randomSort(password);

  return password;
};

// Function to shuffle password characters.
const randomSort = (str) => {
  const randomStr = str
    .split("") // converts to an array
    .sort((a, b) => Math.random() - 0.5) // randomly sorting
    .join(""); // converts to string

  return randomStr;
};

// Function to generate random number and get a random character from the string by using generated random number as an index.
const getRandomChar = (chars) => {
  const randomIndex = Math.floor(Math.random() * chars.length);
  const char = chars.charAt(randomIndex);
  return char;
};

// Validation function for input parameter
const validateInputs = (params) => {
  if (params.passwordLength < 4) {
    alert("Character length must be greater than 3.");
    return false;
  }

  if (
    !params.hasUpperCase &&
    !params.hasLowerCase &&
    !params.hasNumber &&
    !params.hasSymbol
  ) {
    alert("Password must include at least a letter, a number or a symbol");
    return false;
  }

  return true;
};

const getStrengthPoint = (params) => {
  const point =
    (Number(params.hasUpperCase) +
      Number(params.hasLowerCase) +
      Number(params.hasNumber) +
      Number(params.hasSymbol) * 2) *
    params.passwordLength;

  return point;
};

const getStrengthText = (points) => {
  // Text of lblStrength
  let strengthText = "";
  // Class of lblStrength
  let strengthClass = "weak";

  //   For loop to add 1 star for each 10 points of strength
  for (let i = 0; i < Math.round(points / 10); i++) {
    strengthText += "&#9733;";
  }

  if (points > 70) {
    strengthClass = "strong";
  } else if (points > 30) {
    strengthClass = "normal";
  }

  return `<span class=${strengthClass}> ${strengthText} </span>`;
};
