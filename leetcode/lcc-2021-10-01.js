function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));


  dp[0].fill(0);
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] == text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "abc"));
