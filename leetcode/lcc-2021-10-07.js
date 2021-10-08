function exist(board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const firstChar = board[i][j]
      if (firstChar !== word[0]) continue;
      visited[i][j] = true;
      if (helper(i,j, firstChar)) {
        return true;
      }
      visited[i][j] = false;
    }
  }

  return false;
  function helper(y, x, currWord) {
    if (currWord.length == word.length) return true;

    for (let [row, col] of directions) {
      const nextX = x + col;
      const nextY = y + row;

      if (isOutOfBound(nextX, nextY) || visited[nextY][nextX]) continue;

      visited[nextY][nextX] = true;
      const nextChar = board[nextY][nextX];
      if (nextChar !== word[currWord.length]) continue;
      if (helper(nextY, nextX, currWord + nextChar)) {
        return true;
      }
      visited[nextY][nextX] = false;
    }

    return false;
  }

  function isOutOfBound(x, y) {
    return x < 0 || x >= n || y < 0 || y >= m;
  }
}

const board = [["a", "a"]];
const word = "aaa"
console.log(exist(board, word));
