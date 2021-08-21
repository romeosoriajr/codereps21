function isValidSudoku(board) {
  const seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        const rowStr = `${num}-${i}-row`;
        const colStr = `${num}-${j}-col`;
        const boxStr = `${num}-${parseInt(i / 3)}-${parseInt(j / 3)}`;

        if (seen.has(rowStr) || seen.has(colStr) || seen.has(boxStr)) {
          return false;
        }

        seen.add(rowStr);
        seen.add(colStr);
        seen.add(boxStr);
      }
    }
  }

  return true;
}
const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
