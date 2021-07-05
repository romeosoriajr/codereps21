function matrixReshape (mat, r, c) {

  const m = mat.length;
  const n = mat[0].length;

  if (r*c !== m*n) return mat;

  const result = [];

  let temp = [];
  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {

      temp.push(mat[i][j]);

      if (temp.length == c) {
        result.push(temp);
        temp = [];
      }

    }
  }

  return result;

}
const mat = [[1,2],[3,4]], r = 1, c = 4
console.log(matrixReshape(mat, r, c));
