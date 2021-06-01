function maxAreaOfIsland(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] == 1) {
        const area = getArea(row, col);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;

  function getArea(row, col) {
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      grid[row][col] !== 1
    ) {
      return 0;
    }

    grid[row][col] = 0;

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    let total = 1;

    directions.forEach((d) => {
      total += getArea(row + d[0], col + d[1]);
    });

    return total;
  }
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
