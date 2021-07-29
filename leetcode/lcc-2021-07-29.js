function updateMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Number.MAX_SAFE_INTEGER;
      }
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift();
    for ([y, x] of directions) {
      const r = i + y;
      const c = j + x;

      if (r < 0 || c < 0 || r >= m || c >= n || mat[r][c] <= mat[i][j] + 1)
        continue;
      queue.push([r, c]);
      mat[r][c] = mat[i][j] + 1;
    }
  }

  return mat;
}
console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
