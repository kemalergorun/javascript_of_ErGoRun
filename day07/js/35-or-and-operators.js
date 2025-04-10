let isAdmin = true;

const keyword = isAdmin && "admin";
// if(isAdmin){
//     let userRole = "admin";
// }

const keyword1 = isAdmin || "user";
// if(!isAdmin){
//     let userRole = "user";
// }

console.log(keyword);
console.log(keyword1);

const adminPanel = `
    <li>Users </li>
    <li>Reports </li>
    <li>Messages </li>
`;

const userPanel = ``;

const ulEl = document.querySelector("ul");
ulEl.innerHTML += isAdmin && adminPanel;
ulEl.innerHTML += isAdmin || userPanel;
