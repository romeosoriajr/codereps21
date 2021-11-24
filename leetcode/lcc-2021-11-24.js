function intervalIntersection(firstList, secondList) {
  const m = firstList.length;
  const n = secondList.length;

  let i = 0;
  let j = 0;

  const result = [];

  while (i < m && j < n) {
    const a = firstList[i];
    const b = secondList[j];

    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    if (isOverlapped(a, b)) {
      const c = Math.max(aStart, bStart);
      const d = Math.min(aEnd, bEnd);
      result.push([c, d]);
    }

    if (a[1] < b[1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;

  function isOverlapped(a, b) {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    return (
      (bStart >= aStart && bStart <= aEnd) ||
      (aStart >= bStart && aStart <= bEnd)
    );
  }
}
const firstList = [[0,2],[5,10],[13,23],[24,25]];
const secondList = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(firstList, secondList));
