function numSubmatrixSumTarget(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i=0; i < m; i++) {
    for (let j=1; j < n; j++) {
      matrix[i][j] += matrix[i][j-1];
    }
  }

  let count = 0;

  for (let col1 = 0; col1 < n; col1++) {
    for (let col2=col1; col2 < n; col2++) {

      let sum = 0;
      let counter = new Map([[0, 1]]);

      for (let row = 0; row < m; ++row) {
        sum += matrix[row][col2] - (col1 ? matrix[row][col1 - 1] : 0);
        if (counter.has(sum - target)) count += counter.get(sum-target);
        counter.set(sum, (counter.get(sum) || 0) + 1)
      }

    }
  }

  return count;
}

