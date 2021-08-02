function largestIsland(grid) {
  const n = grid.length;
  let result = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] == 0) {
        result = Math.max(result, paint(r, c, 2, true));
        paint(r, c, 1, true);
      }
    }
  }

  return result == 0 ? n ** 2 : result;
  function paint(r, c, num, flipped) {
    if (
      !flipped &&
      (r < 0 ||
        c < 0 ||
        r >= n ||
        c >= n ||
        grid[r][c] == 0 ||
        grid[r][c] == num)
    )
      return 0;
    grid[r][c] = grid[r][c] == 0 ? 0 : num;

    return (
      1 +
      paint(r + 1, c, num) +
      paint(r - 1, c, num) +
      paint(r, c + 1, num) +
      paint(r, c - 1, num)
    );
  }
}

const grid = [
  [1, 0],
  [0, 1],
];

console.log(largestIsland(grid));
