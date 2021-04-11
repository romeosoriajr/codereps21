function longestIncreasingPath (matrix) {

  var m = matrix.length;
  var n = matrix[0].length;
  var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  var longest = 1;
  var memo = new Array(m).fill(null).map(() => new Array(n).fill(0));


  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      longest = Math.max(longest, helper(i, j));
    }
  }

  return longest;

  // return the current length
  function helper (row, col) {
    if (memo[row][col] !== 0) return memo[row][col];

    var localLongest = 1;

    for (let [offsetRow, offsetCol] of directions) {

      var nextRow = row+offsetRow;
      var nextCol = col+offsetCol;

      if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) continue;

      if (matrix[row][col] >= matrix[nextRow][nextCol]) continue;

      localLongest = Math.max(localLongest, helper(nextRow, nextCol) + 1);
    }

    memo[row][col] = localLongest;

    return localLongest;

  }
}

console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))
