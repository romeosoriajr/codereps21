function shortestPathBinaryMatrix (grid) {

  var N = grid.length;

  if (grid[0][0] || grid[N-1][N-1]) return -1;

  var neighbors = [[1,0], [-1,0], [0,1], [0,-1], [-1,-1], [1,1], [1,-1], [-1,1]]
  var seen = new Set();

  var queue = [[0,0,1]];

  seen.add(`${0},${0}`);

  while (queue.length) {
    var [i, j, dist] = queue.shift();

    if (i == N-1 && j == N-1) return dist;

    for (let [n1, n2] of neighbors) {
      var x = i + n1;
      var y = j + n2;

      if ((0 <= x && x < N) && (0 <= y && y < N)) {

        if (!seen.has(`${x},${y}`) && grid[x][y] == 0) {
          seen.add(`${x},${y}`);
          queue.push([x, y, dist+1]);
        }
      }
    }
  }

  return -1;
}

const grid = [
  [0,0,1,0,0,0,0],
  [0,1,0,0,0,0,1],
  [0,0,1,0,1,0,0],
  [0,0,0,1,1,1,0],
  [1,0,0,1,1,0,0],
  [1,1,1,1,1,0,1],
  [0,0,1,0,0,0,0]
  ]
console.log(shortestPathBinaryMatrix(grid))
