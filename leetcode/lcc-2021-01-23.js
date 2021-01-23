function diagonalSort (mat) {
  var rows = mat.length;
  var cols = mat[0].length;

  //look at diagonals starting on rows
  for (let row=0; row < rows; row++) {
    helper(mat, row, 0);
  }

  //look at diagonals starting on columns
  for (let col=0; col < cols; col++) {
    helper(mat, 0, col);
  }

  return mat;

  function helper(mat, row, col) {

    var list = [];

    var i = row;
    var j = col;

    // create an array with numbers in same diagonal
    while (i < rows && j < cols) {
      list.push(mat[i][j]);
      i++;
      j++;
    }

    list.sort((a,b) => a-b);

    //replace the diagonal with the sorted list
    for (let num of list) {
      mat[row][col] = num;
      row++;
      col++;
    }
  }
}
