function climbStairs(n) {

  const dp = [1,2]

  for (let i=2; i < n; i++) {
    dp[i%2] = dp[0] + dp[1];
  }

  return dp[n % 2 ? 0 : 1];
}

function minCostClimbingStairs(cost) {

  const n = cost.length;
  const dp = new Array(n).fill(null);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i=2; i < n; i++) {
    dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
  }

  return Math.min(dp[n-1], dp[n-2])
}

const cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));
