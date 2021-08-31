function maxCount(m, n, ops) {
  if (!ops.length) return m*n;
  let row = Number.MAX_SAFE_INTEGER;
  let col = Number.MAX_SAFE_INTEGER;

  for ([a, b] of ops) {
    row = Math.min(row, a);
    col = Math.min(col, b);
  }

  return row * col;
}

const m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]];
console.log(
  maxCount(m, n, ops)
);
