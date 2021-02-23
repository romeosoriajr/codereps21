function searchMatrix(matrix, target) {
  var m = matrix.length;
  var n = matrix[0].length;

  var row = 0;
  var col = n-1;

  while (col >= 0 && row < m) {
    var midVal = matrix[row][col];
    if (midVal == target) {
      return true;
    } else if (midVal > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;

}
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))
