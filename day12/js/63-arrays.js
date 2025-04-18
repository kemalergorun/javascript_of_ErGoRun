const courses = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "SASS",
  "API",
  "React",
  "Next.js",
];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[7]);
console.log(courses[100008]); // undefined

const anotherCourses = new Array("Angular", "React Native", "Node.js");

console.log(anotherCourses[0]);
console.log(anotherCourses[1]);
console.log(anotherCourses[999]); // undefined

// Accessing Array Length
const coursesLength = courses.length;
console.log(coursesLength); // 8
// index starts from 0 while length starts from 1.
// Therefore, length === lastIndex + 1

// Accessing Last Element of an Array
const lastItem = courses[coursesLength - 1];
console.log(lastItem); // Next.js

// Updating/Adding Array Element
anotherCourses[0] = "Vue.js";
console.log(anotherCourses); //  ['Vue.js', 'React Native', 'Node.js']

anotherCourses[3] = "Express";
console.log(anotherCourses); // ['Vue.js', 'React Native', 'Node.js', 'Express']

anotherCourses[10] = "Framer-Motion";
console.log(anotherCourses); // ['Vue.js', 'React Native', 'Node.js', 'Express', empty × 6, 'Framer-Motion']
console.log(anotherCourses.length); // 11

let arr = [1, 2, 3];
arr = [1];
console.log(arr); // [1]
