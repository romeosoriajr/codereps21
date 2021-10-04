function islandPerimeter(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbors = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        islands++;

        if (i < m - 1 && grid[i + 1][j]) neighbors++;
        if (j < n - 1 && grid[i][j + 1]) neighbors++;
      }
    }
  }

  return islands * 4 - neighbors * 2;
}

function islandPerimeterIterative(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        result += getEdges(i, j);
      }
    }
  }

  return result;

  function getEdges(i, j) {
    let result = 0;

    const directions = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];

    for (const [x, y] of directions) {
      const [row, col] = [i + x, j + y];

      if (isOutOfBounds(row, col) || grid[row][col] == 0) {
        result += 1;
      }
    }

    return result;
  }

  function isOutOfBounds(row, col) {
    return row < 0 || row >= m || col < 0 || col >= n;
  }
}

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid) == 16);
console.log(islandPerimeter([[1, 0]]) == 4);
console.log(islandPerimeter([[1]]) == 4);
