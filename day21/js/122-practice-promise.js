document.getElementById("click").addEventListener("click", () => {
  confirmAsync("Do you want to confirm?")
    .then((res) => console.log("Then block, ", res))
    .catch((err) => console.log("Catch Block, ", err));
});

const confirmAsync = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = confirm(message);
      if (result) {
        resolve("Confirm is accepted");
      } else {
        reject("Confirm is abandoned");
      }
    }, 1000);
  });
};
