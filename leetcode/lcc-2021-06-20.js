function swimInWater(grid) {
  const n = grid.length;
  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const visited = new Set();
  let time = 0;

  while (!visited.has(n * n - 1)) {
    visited.clear();
    helper(0, 0);
    time += 1;
  }

  return time - 1;

  function helper(r, c) {
    if (
      isOutOfBounds(r, c) ||
      isTooHigh(time, grid[r][c]) ||
      visited.has(r * n + c)
    )
      return;

    visited.add(r * n + c);
    for (let [x, y] of directions) {
      helper(r + x, c + y);
    }
  }

  function isOutOfBounds(r, c) {
    return r < 0 || r >= n || c < 0 || c >= n;
  }

  function isTooHigh(time, elevation) {
    return time < elevation;
  }
}

const grid = [
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];
console.log(swimInWater(grid));
