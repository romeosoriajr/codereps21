function leastBricks(wall) {

  const mapEdge = new Map();
  // key is edge, value is total at the edge;
  let maxCount = 0;

  for (let row=0; row < wall.length; ++row) {

    let edge = 0;

    for (let brick=0; brick < wall[row].length-1; ++brick) {

      edge += wall[row][brick];
      mapEdge.set(edge, (mapEdge.get(edge) || 0) + 1)
      maxCount = Math.max(maxCount, mapEdge.get(edge));

    }

  }

  return wall.length - maxCount;

}
const wall = [[1],[1],[1]];
const orig = [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]];
console.log(leastBricks(orig));
