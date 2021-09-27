function movesToChessboard(board) {
  const n = board.length;
  const isEven = n % 2 == 0;

  if (!isValid(board)) return -1;

  let rowSwap = 0;
  let colSwap = 0;

  let rowSwap2 = 0;
  let colSwap2 = 0;

  for (let i = 0; i < n; i++) {
    if (board[i][0] == i % 2) {
      rowSwap++;
    } else {
      rowSwap2++;
    }

    if (board[0][i] == i % 2) {
      colSwap++;
    } else {
      colSwap2++;
    }
  }

  if (rowSwap + colSwap == 0 || rowSwap2 + colSwap2 == 0) return 0;

  if (isEven) {
    rowSwap = Math.min(rowSwap, rowSwap2);
    colSwap = Math.min(colSwap, colSwap2);
  } else {
    rowSwap = (rowSwap % 2 == 0) ? rowSwap : rowSwap2;
    colSwap = (colSwap % 2 == 0) ? colSwap : colSwap2;
  }

  return (rowSwap + colSwap) / 2;

  function isValid(board) {
    const sum = board[0].reduce((acc, val) => acc + val);

    if (isEven && sum !== n / 2) return false;
    if (!isEven && sum > (n + 1) / 2) return false;

    const firstRow = board[0].join("");
    const flipped = board[0].map((v) => (v ? 0 : 1)).join("");

    const counter = [0, 0];

    for (let i = 0; i < n; i++) {
      const str = board[i].join("");
      if (str == firstRow) {
        counter[0]++;
      } else if (str == flipped) {
        counter[1]++;
      } else {
        return false;
      }
    }
    if (isEven) return counter[0] == counter[1];
    return Math.abs(counter[0] - counter[1]) == 1;
  }
}
