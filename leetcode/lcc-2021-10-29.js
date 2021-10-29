function orangesRotting(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let fresh = 0;
  const rotten = [];
  let minutes = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const o = grid[i][j];
      if (!o) continue;
      if (o == 1) {
        fresh++;
      } else {
        rotten.push([i, j]);
      }
    }
  }

  while (rotten.length) {
    const breadth = rotten.length;

    for (let o = 0; o < breadth; ++o) {
      const [row, col] = rotten.shift();

      for (let [x, y] of directions) {
        if (row + x >= m || col + y >= n || row + x < 0 || col + y < 0)
          continue;
        const pos = grid[row + x][col + y];
        if (pos == 1) {
          rotten.push([row + x, col + y]);
        }
      }
    }

    if (rotten.length) {
      minutes++;
      for (let [row, col] of rotten) {
        if (grid[row][col] == 1) {
          grid[row][col]++;
          fresh--;
        }
      }
    }
  }

  return fresh ? -1 : minutes;
}

const grid = [[2,1,1],[0,1,1],[1,0,1]];
console.log(orangesRotting(grid));
