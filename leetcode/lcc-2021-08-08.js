function matrixRankTransform(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rank = new Array(n + m).fill(0);
  const map = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const arr = map.get(matrix[i][j]) || [];
      arr.push([i, j]);
      map.set(matrix[i][j], arr);
    }
  }

  const keys = [...map.keys()];
  keys.sort((a, b) => a - b);

  for (let a of keys) {
    let p = [];
    for (let i = 0; i < m + n; i++) p.push(i);
    let rank2 = [...rank];
    const arr = map.get(a);
    for (let [i, j] of arr) {
      i = find(p, i);
      j = find(p, j + n);
      p[i] = j;
      rank2[j] = Math.max(rank2[i], rank2[j]);
    }
    for (let [i, j] of arr) {
      rank[i] = rank[j + n] = matrix[i][j] = rank2[find(p, i)] + 1;
    }
  }

  return matrix;

  function find(p, i) {
    if (p[i] !== i) p[i] = find(p, p[i]);
    return p[i];
  }
}
const matrix = [
  [20, -21, 14],
  [-19, 4, 19],
  [22, -47, 24],
  [-19, 4, 19],
];
console.log(matrixRankTransform(matrix));
