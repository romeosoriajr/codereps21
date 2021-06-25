function findRedundantConnection (edges) {
  const n = edges.length;

  const map = new Map();

  for (let i=1; i <= n; i++) {
    map.set(i, new Set());
  }

  for (let [v1, v2] of edges) {
    if (helper(new Set(), map, v1, v2)) return [v1, v2];

    map.get(v1).add(v2);
    map.get(v2).add(v1);

  }

  return [-1, -1];

  function helper(visited, map, v1, v2) {
    if (v1 == v2) return true;
    visited.add(v1);
    for (let neighbor of map.get(v1)) {
      if (!visited.has(neighbor)) {
        if (helper(visited, map, neighbor, v2)) return true;
      }
    }

    return false;
  }
}

const edges = [[1,2],[1,3],[2,3]];
console.log(findRedundantConnection(edges));
