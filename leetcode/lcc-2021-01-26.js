function minimumEffortPath(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(grid[i][j], max);
    }
  }

  const directions = [[-1, 0],[0, -1],[1, 0],[0, 1]];

  function go(grid, pos, max) {
    let nextPos = [];
    const [row, col] = pos;
    for (var i = 0; i < directions.length; i++) {
      const nextRow = row + directions[i][0];
      const nextCol = col + directions[i][1];

      const isOutOfBounds = ((nextRow < 0 || nextRow > grid.length - 1)
                            || (nextCol < 0 || nextCol > grid[0].length - 1));

      if (isOutOfBounds) continue;

      let diff = Math.abs(
        grid[row + directions[i][0]][col + directions[i][1]] - grid[row][col]
      );
      if (diff <= max) {
        nextPos.push([row + directions[i][0], col + directions[i][1]]);
      }
    }
    return nextPos;
  };

  function recurse (start, end) {
    if (start >= end) return start;
    const mid = Math.floor((start + end) / 2);

    return tryGo(mid) ? recurse(start, mid) : recurse(mid + 1, end);

  };

  function tryGo (max) {
    let dpMap = {};
    let current = [[0, 0]];
    while (current.length > 0) {
      let nexts = [];
      for (var i = 0; i < current.length; i++) {
        if (current[i][0] === grid.length - 1
            && current[i][1] === grid[0].length - 1){
          return true;
        }
        if (dpMap[current[i][0] + '-' + current[i][1]]) continue;
        dpMap[current[i][0] + '-' + current[i][1]] = true;
        const next = go(grid, current[i], max);
        nexts = [...nexts, ...next];
      }
      current = nexts;
    }
  };

  return recurse(0, max);
};
console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));
// had to look up sol
