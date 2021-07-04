function maxSumSubmatrix(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < cols; i++) {
    let sumOfRow = Array(rows).fill(0);
    for (let j = i; j < cols; j++) {
      let sum = 0;
      let max = Number.MIN_SAFE_INTEGER;
      for (let r = 0; r < rows; r++) {
        sumOfRow[r] += matrix[r][j];
        if (sum < 0) sum = 0;
        sum += sumOfRow[r];
        max = Math.max(max, sum);
      }
      if (max <= k) {
        result = Math.max(result, max);
      } else {
        max = Number.MIN_SAFE_INTEGER;
        for (let m = 0; m < rows; m++) {
          sum = 0;
          for (let n = m; n < rows; n++) {
            sum += sumOfRow[n];
            if (sum <= k) max = Math.max(max, sum);
          }
        }
        result = Math.max(result, max);
      }
      if (result === k) return k;
    }
  }
  return result;
}
const matrix = [[2, 2, -1]];
const k = 2;

console.log(maxSumSubmatrix(matrix, k));
