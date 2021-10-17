function maxProfit (prices) {
  const n = prices.length;

  let bought1 = Number.MAX_SAFE_INTEGER;
  let bought2 = Number.MAX_SAFE_INTEGER;
  let sold1 = 0;
  let sold2 = 0;

  for (let i=0; i < n; i++) {

    bought1 = Math.min(bought1, prices[i]);
    sold1 = Math.max(sold1, prices[i] - bought1);
    bought2 = Math.min(bought2, prices[i] - sold1);
    sold2 = Math.max(sold2, prices[i] - bought2);

  }

  return sold2;

}

const prices = [3,3,5,0,0,3,1,4];

console.log(maxProfit(prices));
