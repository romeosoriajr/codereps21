function climbStairs(n) {

  if (n <= 2) return n;
  const dp = [1,1];

  for (let i=2; i <= n; i++) {

    dp[i%2] = dp[0]+dp[1];
  }

  return dp[n%2];
}

console.log(climbStairs(2) == 2);
console.log(climbStairs(3) == 3);
