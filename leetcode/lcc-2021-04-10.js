function longestIncreasingPath (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;

  var longest = 1;
  var memo = new Array(m).fill(null).map(() => new Array(n).fill(0));

  var directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      var length = dfs(i, j);
      longest = Math.max(length, longest);
    }
  }

  return longest;

  // should return a value of the longest length
  function dfs(row, col) {
    if (memo[row][col] !== 0) return memo[row][col];
    var currLongest = 1;

    for (let i=0; i < directions.length; i++) {
      var currDirection = directions[i];
      var nextRow = row + currDirection[0];
      var nextCol = col + currDirection[1];

      if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) continue;
      if (matrix[row][col] <= matrix[nextRow][nextCol]) continue;

      var length = 1 + dfs(nextRow, nextCol);
      currLongest = Math.max(currLongest, length);
    }

    memo[row][col] = currLongest;

    return currLongest;

  }

}

console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))
