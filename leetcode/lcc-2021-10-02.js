//bottom-Up.. start from the bottom right corner since the minimum health at that position should be 1
function calculateMinimumHP(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const dp = new Array(m + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const health = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];

      dp[i][j] = health <= 0 ? 1 : health;
    }
  }

  return dp[0][0];
}

const dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];
console.log(calculateMinimumHP(dungeon) == 7);
