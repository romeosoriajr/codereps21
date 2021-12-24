function merge(intervals) {
  intervals.sort((a, b) => a[0] < b[0] ? -1 : 1);
  const result = [[...intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    const prevInterval = result[result.length - 1];
    const [prevA, prevB] = prevInterval;

    const currInterval = intervals[i];
    const [currA, currB] = currInterval;

    if (prevA <= currA && currA <= prevB) {
      const merged = [Math.min(prevA, currA), Math.max(prevB, currB)];
      result.pop();
      result.push(merged);
    } else {
      result.push([currA, currB]);
    }
  }

  return result;
}

const intervals = [
  [1, 4],
  [0, 4],
];

console.log(merge(intervals));
