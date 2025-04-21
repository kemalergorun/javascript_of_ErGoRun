const cars = [
  {
    brand: "Mercedes",
    model: "S500",
    color: "Beige",
    transmission: "Automatic",
    img: "https://friendscarrental.com/frontend/image/mercedes-s-class-s500-1708352796658.webp",
  },
  {
    brand: "BMW",
    model: "X5",
    color: "Black",
    transmission: "Automatic",
    img: "https://cdn.motor1.com/images/mgl/1ZkqgW/s1/1x1/2023-bmw-x5.webp",
  },
  {
    brand: "Audi",
    model: "A8",
    color: "White",
    transmission: "Automatic",
    img: "https://hips.hearstapps.com/hmg-prod/images/a218141-medium-1635867809.jpg?crop=0.777xw:0.655xh;0.115xw,0.209xh&resize=2048:*",
  },
  {
    brand: "Porsche",
    model: "911",
    color: "Yellow",
    transmission: "Manual",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLZHdJfANpIHcWj0JhekvoCH0AGgTsdA5og&s",
  },
  
];

function populateCars(arr) {
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Invalid Input.",
    };
  }

  console.log(arr);
  let carList = "";

//  item for iteration 2 = {
//     brand: "BMW",
//     model: "X5",
//     color: "Black",
//     transmission: "Automatic",
//     img: "https://cdn.motor1.com/images/mgl/1ZkqgW/s1/1x1/2023-bmw-x5.webp",
//   },
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    carList += `
    <div class="card">
        <img
        src=${item?.img}
        alt=${item?.brand - item?.model}
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div>
        `;
        console.log(carList);
  };

  document.querySelector(".car-list").innerHTML = carList;

}


populateCars(cars);

let x = 1;

x += 1 // x = x + 1


// 1st iteration:
/* 
carList = "" +   <div class="card">
        <img
        src=${item?.img}
        alt=""
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div>

carList =   <div class="card">
        <img
        src=${item?.img}
        alt=""
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div>

2nd Iteration

carList =  <div class="card">
        <img
        src=${item?.img}
        alt=""
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div> +  <div class="card">
        <img
        src=${item?.img}
        alt=""
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div>

3rd Iteration
carList = carList +  <div class="card">
        <img
        src=${item?.img}
        alt=""
        />
        <h1> ${item?.brand} </h1>
        <h2> ${item?.model} </h2>
        <p> ${item?.color} </p>
        <p> ${item?.transmission} </p>
        <button>More Info</button>
    </div>

    */





















