function tictactoe(moves) {
  const grid = new Array(3).fill(null).map(() => new Array(3).fill(null));

  for (let i = 0; i < moves.length; i++) {
    const char = i % 2 == 0 ? "A" : "B";

    const [row, col] = moves[i];
    grid[row][col] = char;
  }

  const result = getWinner(grid);

  if (result) {
    return result;
  } else {
    return moves.length == 9 ? "Draw" : "Pending";
  }

  function getWinner(grid) {
    for (let i = 0; i < 3; i++) {
      const result = isStraight(i);
      if (result) return result;
    }

    return isDiagonal();

    function isStraight(pos) {
      return (
        (grid[pos][0] == grid[pos][1] &&
          grid[pos][1] == grid[pos][2] &&
          grid[pos][2]) ||
        (grid[0][pos] == grid[1][pos] &&
          grid[1][pos] == grid[2][pos] &&
          grid[2][pos]) ||
        null
      );
    }

    function isDiagonal() {
      return (
        (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[2][2]) ||
        (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2] && grid[0][2]) ||
        null
      );
    }
  }
}
const moves = [
  [0, 0],
  [1, 1],
];
console.log(tictactoe(moves));
