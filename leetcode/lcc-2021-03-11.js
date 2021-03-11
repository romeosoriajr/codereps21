function coinChange(coins, amount) {

  var dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0; 
  for (let currAmount = 1; currAmount <= amount; currAmount++) {
    for (let i=0; i < coins.length; i++) {
      var currCoin = coins[i];

      if (currCoin <= currAmount) {
        dp[currAmount] = Math.min(dp[currAmount-currCoin]+1, dp[currAmount]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];

}
function coinChangeNaive(coins, amount) {

  var lowestCount = Number.MAX_SAFE_INTEGER;

  helper(coins, amount, 0);

  return lowestCount < Number.MAX_SAFE_INTEGER ? lowestCount : -1;

  function helper(coins, amount, currCount) {
    if (amount < 0) return;
    if (amount == 0) {
      lowestCount = Math.min(currCount, lowestCount);
      return;
    }

    for (let i=0; i < coins.length; i++) {
      helper(coins, amount-coins[i], currCount+1);
    }
  }

}

console.log(coinChange([1,2,5], 11))
