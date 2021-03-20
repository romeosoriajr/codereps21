// try iterative also
function canVisitAllRooms(rooms) {
  var N = rooms.length;

  var visited = new Set();
  visited.add(0);

  helper(0);

  return visited.size == N;

  function helper(roomNum) {
    for (let neighbor of rooms[roomNum]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        helper(neighbor);
      }
    }
  }

}

const rooms = [[2,3],[],[2],[1,3,1]];
console.log(canVisitAllRooms(rooms));
