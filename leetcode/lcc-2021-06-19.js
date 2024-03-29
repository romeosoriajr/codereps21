function kInversePairs(n, k) {
  const mod = 10 ** 9 + 7;
  if (k > (n * (n - 1)) / 2 || k < 0) return 0;
  let dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    if (i + 1 <= n) dp[i + 1][0] = 1;
    for (let j = 1; j <= Math.min(k, (i * (i - 1)) / 2); j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      if (j >= i) dp[i][j] -= dp[i - 1][j - i];
      dp[i][j] = (dp[i][j] + mod) % mod;
    }
  }
  return dp[n][k];
}
console.log(kInversePairs(3, 1));
