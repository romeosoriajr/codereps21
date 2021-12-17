function maximalSquare(matrix) {
  if (!matrix || !matrix.length) return 0;

  const m = matrix.length;
  const n = matrix[0].length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  let result = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] == "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        result = Math.max(dp[i][j], result);
      }
    }
  }

  return result ** 2;
}

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalSquare(matrix));
