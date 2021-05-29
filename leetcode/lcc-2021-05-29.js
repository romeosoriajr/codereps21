function totalNQueens(n) {

  const cols = Array(n).fill(false);
  const backDiag = Array(n).fill(false);
  const frontDiag = Array(n).fill(false);

  let result = 0;
  helper(0);
  return result;

  function helper(row) {

    if (row === n) {
      result += 1;
      return;
    }

    for (let i=0; i < n; i++) {
        if (cols[i] || backDiag[row+i] || frontDiag[row-i]) continue;
        toggle(i,row,true);
        helper(row+1);
        toggle(i,row,false);
    }
  }

  function toggle(i,j, bool) {
    cols[i] = bool;
    backDiag[j+i] = bool;
    frontDiag[j-i] = bool;
  }


}

console.log(totalNQueens(4));
