function threeEqualParts(arr) {
  let ones = 0;
  for (let digit of arr) {
    if (digit) ones++;
  }

  const result = [-1, -1];

  if (!ones) return [0, 2];
  if (ones % 3 != 0) return result;

  let thirdIndex = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] && ++count == ones / 3) {
      thirdIndex = i;
      break;
    }
  }

  const firstIndex = helper(0, thirdIndex);
  if (firstIndex < 0) return result;

  const secondIndex = helper(firstIndex + 1, thirdIndex);
  if (secondIndex < 0) return result;

  return [firstIndex, secondIndex + 1];

  function helper(start, mark) {
    while (!arr[start]) start++;
    while (mark < arr.length) {
      if (arr[start] != arr[mark]) return -1;
      start++;
      mark++;
    }

    return start - 1;
  }
}

const arr = [1, 0, 1, 0, 1];
console.log(threeEqualParts(arr));
