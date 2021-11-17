function uniquePaths(m, n) {
  const grid = new Array(2).fill(null).map(() => new Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    grid[0][i] = 1;
  }

  for (let i = 0; i < 2; i++) {
    grid[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const a = i % 2 ? 0 : 1;
      const b = i % 2 ? 1 : 0;
      grid[b][j] = grid[a][j] + grid[b][j - 1];
    }
  }

  return grid[(m - 1) % 2][n - 1];
}

console.log(uniquePaths(7, 3));
