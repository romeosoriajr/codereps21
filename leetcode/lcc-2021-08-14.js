function removeBoxes(boxes) {
  const n = boxes.length;

  const cache = Array(n)
    .fill(null)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => Array(n).fill(null))
    );

  return helper(boxes, 0, n - 1, 0);

  function helper(boxes, left, right, k) {
    if (left > right) return 0;
    if (cache[left][right][k] > 0) return cache[left][right][k];

    const l0 = left;
    const k0 = k;

    while (left + 1 <= right && boxes[left] == boxes[left + 1]) {
      left += 1;
      k += 1;
    }

    let result = (k + 1) * (k + 1) + helper(boxes, left + 1, right, 0);

    for (let i = left + 1; i <= right; ++i) {
      if (boxes[i] == boxes[left]) {
        result = Math.max(
          result,
          helper(boxes, i, right, k + 1) + helper(boxes, left + 1, i - 1, 0)
        );
      }
    }

    return (cache[l0][right][k0] = result);
  }
}
