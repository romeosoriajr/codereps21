function maxProfit(prices, fee) {
  var l = prices.length;

  var profitWhenSelling = 0;
  var profitWhenBuying = -prices[0];

  //start on second day since first values are already established
  for (let i=1; i < l; i++) {
    var todaysPrice = prices[i];
    profitWhenSelling = Math.max(profitWhenSelling, profitWhenBuying + todaysPrice - fee);
    profitWhenBuying = Math.max(profitWhenBuying, profitWhenSelling - todaysPrice);
  }

  return profitWhenSelling;

};

