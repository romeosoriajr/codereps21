function orderOfLargestPlusSign(n, mines) {
  const grid = new Array(n).fill(null).map(() => new Array(n).fill(n));

  for (let [x, y] of mines) {
    grid[x][y] = 0;
  }

  for (let i = 0; i < n; i++) {
    let j = 0;
    let k = n - 1;
    let l = 0;
    let r = 0;
    let u = 0;
    let d = 0;

    while (j < n) {
      grid[i][j] = Math.min(grid[i][j], (l = grid[i][j] == 0 ? 0 : l + 1));
      grid[i][k] = Math.min(grid[i][k], (r = grid[i][k] == 0 ? 0 : r + 1));
      grid[j][i] = Math.min(grid[j][i], (u = grid[j][i] == 0 ? 0 : u + 1));
      grid[k][i] = Math.min(grid[k][i], (d = grid[k][i] == 0 ? 0 : d + 1));
      j++;
      k--;
    }
  }

  let result = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      result = Math.max(result, grid[r][c]);
    }
  }

  return result;
}

console.log(orderOfLargestPlusSign(5, [[4, 2]]));
