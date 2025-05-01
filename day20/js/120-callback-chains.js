// setTimeout makes functions async

function giveOrder(callback) {
  console.log("The order received.");

  setTimeout(() => {
    console.log("The order is ready");
    callback();
  }, 5000);
}

function eatMeal(callback) {
  console.log("Started to eat meal");
  setTimeout(() => {
    console.log("Finished eating. That was yummy!");
    callback();
  }, 3000);
}

function watchMovie(callback) {
  console.log("Started to watch movie");

  setTimeout(() => {
    callback();
    console.log("Finished");
  }, 1500);
}

function eatPopCorn() {
  console.log("Eating pop corn");
  setTimeout(() => {
    console.log("Pop corn finished.");
  }, 500);
}

// This creates order:
giveOrder(() => {
  eatMeal(() => {
    watchMovie(() => {
      eatPopCorn();
    });
  });
});

// This does not create any order
// giveOrder()
// eatMeal()
// watchMovie()
// eatPopCorn()
