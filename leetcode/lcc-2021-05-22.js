function solveNQueens(n) {
  const visitedCols = Array(n).fill(false);
  const backDiag = Array(n).fill(false);
  const frontDiag = Array(n).fill(false);

  const result = [];

  helper(result, [], 0, n);

  return result;

  function helper(result, list, row, n) {
    if (row == n) {
      result.push([...list]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visitedCols[i] || backDiag[row + i] || frontDiag[row - i]) continue;

      const rowWithQueen = Array(n).fill('.');
      rowWithQueen[i] = 'Q';

      list.push(rowWithQueen.join(''));
      togglePositions(row, i, true);

      helper(result, list, row + 1, n);

      list.pop();
      togglePositions(row, i, false);
    }
  }

  function togglePositions(row, i, val) {
    visitedCols[i] = val;
    backDiag[row + i] = val;
    frontDiag[row - i] = val;
  }
}

console.log(solveNQueens(4));
