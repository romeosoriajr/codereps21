function findMinHeightTrees(n, edges) {
  if (!edges.length) return [0];

  const list = new Map();
  let leaves = [];

  for (let i = 0; i < n; i++) {
    list.set(i, new Set());
  }

  for (let i = 0; i < edges.length; ++i) {
    const [a, b] = edges[i];
    list.get(a).add(b);
    list.get(b).add(a);
  }

  for (let i = 0; i < n; ++i) {
    if (list.get(i).size == 1) leaves.push(i);
  }

  while (n > 2) {
    n -= leaves.length;

    let newLeaves = [];
    for (let leaf of leaves) {
      const v = Array.from(list.get(leaf)).pop();
      list.get(v).delete(leaf);

      if (list.get(v).size === 1) newLeaves.push(v);
    }

    leaves = newLeaves;
  }

  return leaves;
}

// const n = 4,
//   edges = [
//     [1, 0],
//     [1, 2],
//     [1, 3],
//   ];
const n = 6;
const edges = [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
];
console.log(findMinHeightTrees(n, edges));
