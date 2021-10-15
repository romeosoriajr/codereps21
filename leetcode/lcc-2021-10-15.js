function maxProfit(prices) {
  const n = prices.length;
  const buying = new Array(n).fill(null);
  const selling = [...buying];
  const cooldown =  [...buying];

  buying[0] = 0;
  selling[0] = -prices[0];
  cooldown[0] = Number.MIN_SAFE_INTEGER;

  for (let i=1; i < n; i++) {
    buying[i] = Math.max(buying[i-1], cooldown[i-1]);
    selling[i] = Math.max(selling[i-1], buying[i-1] - prices[i]);
    cooldown[i] = selling[i-1] + prices[i];
  }

  return Math.max(buying[n-1], cooldown[n-1]);
}

const prices = [1,2,3,0,2];
