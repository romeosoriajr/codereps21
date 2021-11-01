function solve(board) {
  const m = board.length;
  const n = board[0].length;
  const outOfBounds = (r, c) => r < 0 || r >= m || c < 0 || c >= n;
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const flipOtoE = getToggler("O", "E");
  const flipOtoX = getToggler("O", "X");
  const flipEtoO = getToggler("E", "O");

  for (let col = 0; col < n; col++) {
    flipOtoE(0, col);
    flipOtoE(m - 1, col);
  }
  for (let row = 1; row < m - 1; row++) {
    flipOtoE(row, 0);
    flipOtoE(row, n - 1);
  }

  for (let r = 1; r < m - 1; r++) {
    for (let c = 1; c < n - 1; c++) {
      flipOtoX(r, c);
    }
  }

  for (let col = 0; col < n; col++) {
    flipEtoO(0, col);
    flipEtoO(m - 1, col);
  }
  for (let row = 1; row < m - 1; row++) {
    flipEtoO(row, 0);
    flipEtoO(row, n - 1);
  }

  return board;

  function getToggler(orig, mod) {
    return function toggle(row, col) {
      if (outOfBounds(row, col)) return;

      if (board[row][col] == orig) {
        board[row][col] = mod;

        for (let [x, y] of directions) {
          toggle(row + x, col + y);
        }
      }
    };
  }
}
