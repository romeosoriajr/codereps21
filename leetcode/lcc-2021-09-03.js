function outerTrees(trees) {
  trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const upper = [];
  const lower = [];

  for (let point of trees) {
    while (
      lower.length >= 2 &&
      comp(lower[lower.length - 2], lower[lower.length - 1], point) > 0
    )
      lower.pop();
    while (
      upper.length >= 2 &&
      comp(upper[upper.length - 2], upper[upper.length - 1], point) < 0
    )
      upper.pop();

    upper.push(point);
    lower.push(point);
  }

  return [...new Set([...lower, ...upper])];

  function comp(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;

    return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
  }
}
