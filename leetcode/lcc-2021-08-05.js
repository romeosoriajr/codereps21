function stoneGame(piles) {
  const memo = new Array(piles.length + 1)
    .fill(null)
    .map(() =>
      new Array(piles.length + 1).fill(null).map(() => new Array(2).fill(-1))
    );

  return helper(0, piles.length - 1, piles, true) >= 0;

  function helper(left, right, piles, turn) {
    const pos = turn ? 1 : 0;
    if (right < left) return 0;
    if (memo[left][right][pos] != -1) return memo[left][right][pos];

    const nextTurn = !turn;

    if (turn) {
      memo[left][right][pos] = Math.max(
        piles[left] + helper(left + 1, right, piles, nextTurn),
        piles[right] + helper(left, right - 1, piles, nextTurn)
      );
    } else {
      memo[left][right][pos] = Math.max(
        -piles[left] + helper(left + 1, right, piles, nextTurn),
        -piles[right] + helper(left, right - 1, piles, nextTurn)
      );
    }
    return memo[left][right][pos];
  }
}

const piles = [5, 3, 4, 5];
console.log(stoneGame(piles));
