function flipDiagonal(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i=0; i < m; i++) {
    for (let j=i+1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

function swapRows(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for(let i=0; i < m/2; i++) {
    for (let j=0; j < n; j++) {
      [matrix[i][j], matrix[m-i-1][j]] =
      [matrix[m-i-1][j], matrix[i][j]]
    }
  }

  return matrix;
}

function swapCols(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i=0; i < m; i++) {
    for (let j=0; j < n/2; j++) {
      [matrix[i][j], matrix[i][n-j-1]] = 
      [matrix[i][n-j-1], matrix[i][j]]
    }
  }

  return matrix;
}

function rotate(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  return flipDiagonal(swapRows(matrix));

  function flipDiagonal(matrix) {

    for (let i=0; i < m; i++) {
      for (let j=i+1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }

    return matrix;
  }

  function swapRows(matrix) {

    for(let i=0; i < m/2; i++) {
      for (let j=0; j < n; j++) {
        [matrix[i][j], matrix[m-i-1][j]] =
        [matrix[m-i-1][j], matrix[i][j]]
      }
    }

    return matrix;
  }

}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(rotate(matrix));
