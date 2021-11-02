// to complete a path all zeroes must be visited;
// think possible combinations.

function uniquePathsIII (grid) {

  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0,1],[0,-1],[1,0],[-1,0]];
  const isOutOfBounds = (r,c) => r < 0 || r >= m || c < 0 || c >= n;

  let startRow;
  let startCol;

  let zeroes = 0;

  for (let r=0; r < m; r++) {
    for (let c=0; c < n; c++) {

      if (grid[r][c] == 0) {
        zeroes++;
      } else if(grid[r][c] == 1) {
        startRow = r;
        startCol = c;
      }
    }
  }

  return dfs(startRow, startCol);

  function dfs(r,c) {
    if (isOutOfBounds(r,c) || grid[r][c] == -1) return 0;

    if (grid[r][c] == 2) {
      return zeroes < 0 ? 1 : 0;
    }

    // toggle the limits;
    grid[r][c] = -1;
    zeroes--;

    const paths = directions.reduce((sum, [x,y]) => sum += dfs(r+x, c+y), 0)

    // reset the limits to backtrack;
    grid[r][c] = 0;
    zeroes++;

    return paths;
  }

}

const grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]];
console.log(uniquePathsIII(grid));
