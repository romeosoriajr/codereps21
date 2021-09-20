function numDistinct(s, t) {
  const dp = new Array(t.length + 1)
    .fill(null)
    .map(() => new Array(s.length + 1).fill(null));

  for (let j = 0; j <= s.length; j++) {
    dp[0][j] = 1;
  }

  for (let j = 1; j < t.length; j++) {
    dp[j][0] = 0;
  }

  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      dp[i + 1][j + 1] = t[i] == s[j] ? dp[i][j] + dp[i + 1][j] : dp[i + 1][j];
    }
  }

  return dp[t.length][s.length];
}
