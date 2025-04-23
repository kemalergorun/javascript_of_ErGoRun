const priceList = [100, 150, 300, 50, 80];

const manipulatePriceList = (prices) => {
  //     const updatedPrices = prices.map((price) => {
  //     if (price > 100) {
  //       price *= 1.1;
  //     } else {
  //       price *= 1.15;
  //     }
  //     return price;
  //   });

  //   Shorter version
  const updatedPrices = priceList.map((price) =>
    Math.round(price > 100 ? price * 1.1 : price * 1.15)
  );

  return updatedPrices;
};

console.log(manipulatePriceList(priceList));
