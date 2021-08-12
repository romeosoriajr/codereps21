function canReorderDoubled(arr) {
  arr.sort((a, b) => a - b);
  const map = {};

  for (let num of arr) {
    map[num] = map[num] + 1 || 1;
  }

  for (let num of arr) {
    if (!map[num]) continue;

    if (num < 0 && num % 2 != 0) return false;

    let y = num > 0 ? num * 2 : num / 2;
    if (!map[y]) return false;
    map[num] -= 1;
    map[y] -= 1;
  }

  return true;
}

console.log(canReorderDoubled([2, 1, 2, 6]));
