function minimumAbsDifference(arr) {
  arr.sort((a, b) => a - b);

  let minAbs = Number.MAX_SAFE_INTEGER;

  let result = [];

  for (let i = 1; i < arr.length; i++) {
    const a = arr[i - 1];
    const b = arr[i];

    const abs = Math.abs(b - a);

    if (abs < minAbs) {
      minAbs = abs;
      result = [[a, b]];
    } else if (abs == minAbs) {
      result.push([a, b]);
    }
  }

  return result;
}

const arr = [1, 3, 6, 10, 15];

console.log(minimumAbsDifference(arr));
