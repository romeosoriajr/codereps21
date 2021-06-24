function findPaths(m, n, maxMove, startRow, startColumn) {
  const dp = Array(m + 1)
    .fill(null)
    .map(() =>
      Array(n + 1)
        .fill(null)
        .map(() => Array(maxMove + 1).fill(-1))
    );

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  return helper(startRow, startColumn, maxMove) % 1000000007;
  function helper(i, j, maxMove) {
    if (maxMove < 0) {
      return 0;
    } else if (isOutOfBounds(j,i)) {
      return 1;
    }

    if (dp[i][j][maxMove] != -1) {
      return dp[i][j][maxMove];
    }

    let result = 0;
    for (let [y, x] of directions) {
      result += helper(i + y, j + x, maxMove - 1) % 1000000007;
    }

    dp[i][j][maxMove] = result;
    return dp[i][j][maxMove];
  }

  function isOutOfBounds(x, y) {
    return x >= n || x < 0 || y >= m || y < 0;
  }
}

const m = 36;
const n = 5;
const maxMove = 50;
const startRow = 15;
const startColumn = 3;
console.log(findPaths(m, n, maxMove, startRow, startColumn));
