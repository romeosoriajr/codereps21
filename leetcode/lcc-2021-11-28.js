function allPathsSourceTarget(graph) {
  const n = graph.length;

  const result = [];

  helper(0, [0]);

  return result;

  function helper(index, currPath) {
    if (index == n - 1) {
      result.push([...currPath]);
      return;
    }

    const neighbors = graph[index];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      currPath.push(neighbor);
      helper(neighbor, currPath);
      currPath.pop();
    }
  }
}

const graph = [[1,2,3],[2],[3],[]];
console.log(allPathsSourceTarget(graph));
