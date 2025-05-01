// ASYNC VS SYNC

// Order of Execution

// Sync waits for each previous task to finish. It's order is strict.

// function syncFunction(){
//     console.log("Task 1");
//     console.log("Task 2");
//     console.log("Task 3");
// }

// syncFunction()

// Async: tasks run in parallel in the background. The order is NOT strict

// function asyncFunction(){

//     console.log("Task 1");
//     setTimeout(() => {
//         console.log("Task 2");
//     }, 1000)
//     console.log("Task 3");

// }

// asyncFunction() // 1 - 3 - 2

// Execution of Order
// Sync runs first followed by async

// console.log("Start");

// function syncTask(){
//     console.log("sync task");
// }

// function asyncTask(){
//     console.log("Starting async task");
//     setTimeout(() => {
//         console.log("Async task completed");
//     }, 500)
// }

// syncTask()
// asyncTask()

// console.log("End");

// Blocking vs Non-Blocking
// Sync may block further execution till the current task is done

// console.log("start");

// for(let i = 0; i < 10000000000; i++){

// }

// console.log("end");

// Async: Non blocking, allowing other code to run while waiting for a task to complete

function nonBlockingTask(callback) {
  console.log("Starting");

  setTimeout(() => {
    console.log("Non blocking task is done");
    callback();
  }, 1000);
}

nonBlockingTask(() => {
  console.log("Callback after non blocking task");
});
