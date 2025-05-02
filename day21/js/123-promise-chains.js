// PROMISE CHAINS

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("My Promise 1");
        }, 4000)
    })
}

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

// No order
// promise1().then(res => console.log(res));
// promise2().then((res) => console.log(res));
// promise3().then((res) => console.log(res));
// promise4().then((res) => console.log(res));

// Run first one, then return promise2 and run this one and return promise3...

// Promise chains create time order in async methods:
promise1()
.then(res => {
    console.log(res);
    return promise2();
}).then((res) => {
    console.log(res);
    return promise3();
}).then((res) => {
    console.log(res);
    return promise4();
}).then((res) => {
    console.log(res);
}).catch(err => console.log(err))