function findWords(board, words) {
  const m = board.length;
  const n = board[0].length;

  const result = new Set();

  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));

  for (const word of words) {
    for (let i = 0; i < m; i++) {
        if (result.has(word)) break;
      for (let j = 0; j < n; j++) {
        if (result.has(word)) break;
        visited[i][j] = true;
        search([i, j], "", word);
        visited[i][j] = false;
      }

    }
  }

  return Array.from(result);

  function search([r, c], curr, target) {
    if (board[r][c] != target[0]) return;

    const newCurr = `${curr}${target[0]}`;
    const newTarget = target.substr(1) || "";

    if (!newTarget.length) {
      result.add(newCurr);
      return;
    }

    for (const [a, b] of directions) {
      const [newRow, newCol] = [r + a, c + b];
      if (
        newRow < 0 ||
        newRow >= m ||
        newCol < 0 ||
        newCol >= n ||
        visited[newRow][newCol]
      )
        continue;

      visited[newRow][newCol] = true;
      search([newRow, newCol], newCurr, newTarget)
      visited[newRow][newCol] = false;
    }

    return false;
  }
}

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain","hklf", "hf"]
//const words = ["hf"]
console.log(findWords(board, words));
