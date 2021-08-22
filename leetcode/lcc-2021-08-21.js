function solveSudoku(board) {
  return helper(board);

  function helper(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") continue;

        for (let num = 1; num <= 9; num++) {
          if (isValid(i, j, num)) {
            board[i][j] = `${num}`;
            if (helper(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }

        return false;
      }
    }

    return true;
  }

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] == num) return false;
      if (board[row][i] == num) return false;

      const boxRow = [3 * parseInt(row / 3) + parseInt(i / 3)];
      const boxCol = [3 * parseInt(col / 3) + (i % 3)];

      if (board[boxRow][boxCol] == num) return false;
    }

    return true;
  }
}
