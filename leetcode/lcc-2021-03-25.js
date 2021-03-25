function pacificAtlantic (matrix) {
  
  var result = [];
  if (!matrix || !matrix.length || !matrix[0].length) {
    return result;
  }

  var rows = matrix.length;
  var cols = matrix[0].length;
  var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  var pVisited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
  var aVisited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));

  var pQueue = [];
  var aQueue = [];

  // starting positions for vertical
  for (let row=0; row < rows; row++) {
    pQueue.push([row, 0]);
    aQueue.push([row, cols-1]);
    pVisited[row][0] = true;
    aVisited[row][cols-1] = true;
  }

  // starting positions for horizontal
  for (let col=0; col < cols; col++) {
    pQueue.push([0, col]);
    aQueue.push([rows-1, col]);
    pVisited[0][col] = true;
    aVisited[rows-1][col] = true;
  }


  //visit all possible coordinates from both oceans
  bfs(pQueue, pVisited);
  bfs(aQueue, aVisited);

  //look for common visited coordinates
  for(let row=0; row < rows; row++) {
    for(let col=0; col < cols; col++) {
      if (pVisited[row][col] && aVisited[row][col]) {
        result.push([row, col])
      }
    }
  }

  return result;

  function isOutOfBounds(x, y) {
    return x < 0 || x >= rows || y < 0 || y >= cols
  }

  function canFlow(curr, x, y) {
    return matrix[x][y] >= matrix[curr[0]][curr[1]]
  }

  function bfs(queue, visited) {

    while (queue.length) {
      var curr = queue.shift();

      for (direction of directions) {
        var x = curr[0] + direction[0];
        var y = curr[1] + direction[1];
        if ( isOutOfBounds(x,y)
            || visited[x][y]
            || !canFlow(curr, x, y)) {
          continue;
        }

        visited[x][y] = true;
        queue.push([x,y])
      }

    }
  }
}

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
