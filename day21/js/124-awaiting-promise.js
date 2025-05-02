// DOM Elements
const btnPopulateEl = document.getElementById("btnPopulate");
const outputEl = document.getElementById("output");

// Event
btnPopulateEl.addEventListener("click", async () => {
  //   waitForMe(false)
  //     .then((response) => populateOutput(response))
  //     .catch((error) => populateOutput(error));

  try {
    const response = await waitForMe(confirm("Do you confirm?"));
    populateOutput(response);
  } catch (error) {
    populateOutput(error);
    console.log(error);
  }
});

// Declaring the promise
function waitForMe(readyOrNot) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (readyOrNot) {
        resolve("Ready!");
      } else {
        reject("Not ready!");
      }
    }, 1000);
  });
}

// Function
const populateOutput = (message) => {
  outputEl.innerText = message;
};

// Time order with async await

const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello 2");

      resolve("My Promise 1");
    }, 4000);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My Promise 2");
    }, 3000);
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My Promise 3");
    }, 1000);
  });
};

const promise4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My Promise 4");
    }, 2000);
  });
};

// Where to use async in different function declarations:
// async function init1() {}
// const init2 = async function(){}

// await will not work without async
const init = async () => {
  console.log("Hello 1");
  // Till function encounters any async job it acts like it is sync
  try {
    const res1 = await promise1();
    console.log(res1);

    console.log("Hello 3");

    const res2 = await promise2();
    console.log(res2);

    const res3 = await promise3();
    console.log(res3);

    console.log("Hello 4");

    const res4 = await promise4();
    console.log(res4);

    console.log("Hello 5");
  } catch (error) {
    console.log(error);
  }
};

console.log("Hello 6");
init(); // 6 - 1 - 7 - 2 - 3 - 4 - 5
console.log("Hello 7");
/*
 1- JS Engine assign synchronously running functions to Call Stack in their order and executes them accordingly LIFO method. 

 2- However, if it encounters a WEB API (setTimeout, setInterval, fetch, worker etc.) in this case, 
 since WEB APIs are part of the browser, it delegates the task to it.

 3- WEB APIs work asynchronously abd it is not clear when they will be finished. Each WEB API has a callback function, 
 and these functions are sent to Call Stack 

 4- Queue when the time comes, that is, when the WEB API is idle.

 5- If JS Engine encounters a Promise, it sends it to the MicroTask Queue. MicroTask Queue takes precedence over Callback Queue

 6- When Call Stack is completely empty, the Event Loop ensures that the callbacks from each queue are transferred to Call Stack,
 with the priority given to MicroTask Queue
*/

