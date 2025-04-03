const name = "Jane";
const age = 25;

console.log("My name is John and I am 30 years old.");
console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old`);

// With ${} you can use variables in a string.

const newText = `
    I am just
    going to 
    write super
    random things
    ${true}
`;

console.log(newText);
console.log(typeof newText);

const newAge = `${age + 1}`;
console.log(typeof newAge);
console.log(+newAge);
