function findKthNumber(m, n, k) {
  let left = 1;
  let right = m * n + 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (count(m, n, mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;

  function count(m, n, x) {
    let result = 0;

    for (let i = 1; i <= m; i++) {
      result += Math.min(Math.floor(x / i), n);
    }

    return result;
  }
}

console.log(findKthNumber(45, 12, 471));
