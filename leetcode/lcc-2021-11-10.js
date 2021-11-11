function maxProfit(nums) {
  let lastBuy = -nums[0];
  let lastSold = 0;

  for (let i=1; i < nums.length; i++) {
    const currBuy = Math.max(lastBuy, lastSold-nums[i]);
    const currSold = Math.max(lastSold, lastBuy+nums[i]);
    lastBuy = currBuy;
    lastSold = currSold;
  }

  return lastSold;
}

