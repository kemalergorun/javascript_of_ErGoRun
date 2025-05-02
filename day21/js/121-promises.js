// let bool = false;

// let result = new Promise((resolve, reject) => {

//     if(bool){
//         resolve("Resolved")
//     } else{
//         reject("Rejected")
//     }

// });
// console.log(result);

const promise = () => {
  return new Promise((resolve, reject) => {
    console.log(resolve, reject);

    // Runs in asynchronous

    // Pending State => Do something

    const isMealReady = false;

    // Fulfilled State => if the condition is met, it will be resolve
    if (isMealReady) {
      resolve("Meal is ready");
    } else {
      // Rejected State => condition is not met

      // Whatever sent inside the reject will fall into .catch()
      reject("Your meal is burnt!");
    }
  });
};

// console.log(promise());

// .then() part is going to be executed if the promise is resolve(fulfilled)
// .catch() part is going to be executed if the promise is rejected.

promise()
  .then((response) => {
    console.log("Then block");
    console.log(response);
  })
  .catch((error) => {
    console.log("Catch block");
    console.log(error);
  });
