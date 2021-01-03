function countArrangement (n) {
  var visited = new Array(n+1).fill(false);
  var total = 0;

  helper(visited, 1);

  return total;

  function helper(visited, step) {
    if (step > n) {
      total++;
      return;
    }

    for (let i=1; i <= n; i++) {
      if (!visited[i] && (step % i == 0 || i % step == 0)) {
        visited[i] = true;
        helper(visited, step+1);
        visited[i] = false;
      }
    }
  }
}

console.log(countArrangement(2));
