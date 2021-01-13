function numRescueBoats (people, limit) {
  people.sort((a, b) => a-b);
  var left = 0;
  var right = people.length-1;
  var result = 0;

  while (left <= right) {
    if (people[right] + people[left] <= limit) left++;
    right--;
    result++;
  }

  return result;
}
// tried to do every single combination, but would TLE
function numRescueBoatsNaive (people, limit) {

  var visited = new Array(people.length).fill(false);
  var minBoats = Infinity;

  helper(visited, people, limit, 0);

  return minBoats;

  function helper (visited, people, limit, boatsUsed) {

    if (!visited.filter(v => !v).length) {
      minBoats = Math.min(boatsUsed, minBoats);
      return;
    }

    for (let i=0; i < people.length; i++) {

      if (visited[i]) continue;

      visited[i] = true;

      if (people[i] <= limit) {
        helper(visited, people, limit, boatsUsed+1);
      }

      for (let j = 0; j < people.length; ++j) {
        if (visited[j]) continue;

        visited[j] = true;
        if (people[i] + people[j] <= limit) {
          helper(visited, people, limit, boatsUsed+1);
        }

        visited[j] = false;
      }


      visited[i] = false;
    }
      
  } // end helper

}

console.log(numRescueBoats([3,5,4,3,3], 5))
