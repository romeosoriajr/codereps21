function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let cornerFlip = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) cornerFlip = true;
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 1; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
    if (cornerFlip) matrix[i][0] = 0;
  }
}

const matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];
console.log(setZeroes(matrix));
