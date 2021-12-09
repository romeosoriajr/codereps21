function canReach(arr, start) {
  const n = arr.length;
  const visited = new Array(n).fill(false);

  return helper(start);

  function helper(pos) {
    if (arr[pos] == 0) return true;

    const forward = pos + arr[pos];
    const backward = pos - arr[pos];

    if (forward < n && !visited[forward]) {
      visited[forward] = true;
      if (helper(forward)) return true;
      visited[forward] = false;
    }

    if (backward >= 0 && !visited[backward]) {
      visited[backward] = true;
      if (helper(backward)) return true;
      visited[backward] = false;
    }

    return false;
  }
}

const arr = [4, 2, 3, 0, 3, 1, 2];
const start = 5;

console.log(canReach(arr, start));
