function shortestPath(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  let step = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const seen = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  const queue = [[0, 0, 0]];

  seen[0][0] = 0;

  while (queue.length) {
    let breadth = queue.length;

    while (breadth-- > 0) {
      const [row, col, o] = queue.shift();
      if (row == m - 1 && col == n - 1) {
        return step;
      }

      for (const [offsetX, offsetY] of directions) {
        const x = row + offsetY;
        const y = col + offsetX;

        if (x < 0 || x >= m || y < 0 || y >= n) continue;

        const obstacle = grid[x][y] + o;
        if (obstacle >= seen[x][y] || obstacle > k) continue;

        seen[x][y] = obstacle;
        queue.push([x, y, obstacle]);
      }
    }

    ++step;
  }

  return -1;
}
