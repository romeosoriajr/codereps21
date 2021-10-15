function numSquares(n) {

  const dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  let count = 1;

  while (count ** 2 <= n) {
    const sq = count ** 2;

    for (let i=sq; i <= n; i++) {
      dp[i] = Math.min(dp[i-sq] + 1, dp[i])
    }

    count++;
  }

  return dp[n];
}



