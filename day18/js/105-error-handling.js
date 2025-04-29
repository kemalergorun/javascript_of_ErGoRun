// ERROR HANDLING

// Syntax Error
// const name; // SyntaxError

// These errors cannot be caught by using try & catch
// try {
//     const name;
// } catch (error) {
//     console.log(error);
// }
// Uncaught SyntaxError

// Reference Error
// These errors cannot be handled by using try & catch
// console.log(lastName); // ReferenceError

try {
  console.log(lastName);
} catch (error) {
  console.log(error);
}

// Type Error
// These errors can be handled by try & catch
let age = 12;
// age.toUpperCase(); // TypeError

try {
  age.toUpperCase();
} catch (error) {
  console.log(error);
}

// === Try & Catch & Finally ===
const person = {
  name: "John",
  age: 30,
  getInformation: function () {
    return `${this.name} is ${this.age} years old.`;
  },
};

try {
  // Code where error may be expected:
  if (typeof person.age === "number") {
    throw new Error(
      "You have the age as number, but you should have it as string."
    );
  }

  createParagraphElement(
    "Operation is done successfully",
    "alert alert-success text-success"
  );
} catch (e) {
  console.log(e);
  createParagraphElement("Operation failed", "alert alert-danger text-danger");
} finally {
  console.log("I will be running regardless of error.");
}

function createParagraphElement(text, className) {
  const paraEl = document.createElement("p");
  paraEl.innerText = text;
  paraEl.setAttribute("class", className);

  document.querySelector("h1").after(paraEl);
}
