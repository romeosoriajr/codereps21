function maxArea(h, w, horizontalCuts, verticalCuts) {
  const hMax = getMaxDiff(h, horizontalCuts);
  const vMax = getMaxDiff(w, verticalCuts);

  return (hMax * vMax) % (1e9 + 7);

  function getMaxDiff(l, cuts) {
    const cutSorted = cuts.sort((a, b) => a - b);
    cutSorted.push(l);

    let max = cutSorted[0];

    for (let i = 1; i < cutSorted.length; i++) {
      max = Math.max(max, cutSorted[i] - cutSorted[i - 1]);
    }

    return max;
  }
}

console.log(maxArea(5, 4, [3], [3]));
