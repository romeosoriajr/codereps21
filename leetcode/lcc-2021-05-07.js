function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(null));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
        continue;
      }

      const isSame = word1[i - 1] == word2[j - 1];

      dp[i][j] = isSame
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const common = dp[m][n];

  return m-common + n-common;
}

const word1 = "sea";
const word2 = "eat";
console.log(minDistance(word1, word2));
