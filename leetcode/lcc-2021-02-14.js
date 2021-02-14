function isBipartite(graph) {
  // the index of the graph is the vertex
  // and the value at graph[index] is an array of its neighbors

  var colors = new Array(graph.length).fill(0);

  for (let i=0; i < graph.length; i++) {
    if (colors[i] == 0 && !valid(colors, 1, i)) {
      return false;
    }
  }

  return true;

  function valid(colors, color, node) {
    if (colors[node] !== 0) {
      return colors[node] == color;
    }
    colors[node] = color;

    for (let neighbor of graph[node]) {
      if (!valid(colors, -color, neighbor)) {
        return false;
      }
    }

    return true;
  }

}

const graph = [[1,3],[0,2],[1,3],[0,2]];
console.log(isBipartite(graph));
