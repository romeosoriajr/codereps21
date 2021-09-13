function reachableNodes(edges, maxMoves, n) {
  const graph = new Array(n).fill(null).map(() => new Array(n).fill(-1));

  for (let [v1, v2, subnodes] of edges) {
    graph[v1][v2] = subnodes;
    graph[v2][v1] = subnodes;
  }

  let result = 0;

  const queue = new MaxPriorityQueue({priority: x => x[1]});
  const visited = new Set();

  queue.enqueue([0, maxMoves]);


  while (queue.size()) {
    const [v1, moves] = queue.dequeue().element;

    if (visited.has(v1)) continue;

    visited.add(v1);
    result++;

    for (let i = 0; i < n; i++) {
      if (graph[v1][i] > -1) {
        if (moves > graph[v1][i] && !visited.has(i)) {
          queue.enqueue([i, moves - graph[v1][i] - 1]);
        }
        graph[i][v1] -= Math.min(moves, graph[v1][i]);
        result += Math.min(moves, graph[v1][i]);
      }
    }
  }

  return result;
}

const edges = [[0,3,8],[0,1,4],[2,4,3],[1,2,0],[1,3,9],[0,4,7],[3,4,9],[1,4,4],[0,2,7],[2,3,1]];
const maxMoves = 8
const n = 5
console.log(reachableNodes(edges, maxMoves, n));
