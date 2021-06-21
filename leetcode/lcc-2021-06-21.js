function generate(nums) {
  const result = [];

  let level = 1;

  while (level <= nums) {
    const prevRow = result[result.length - 1];
    const row = [];

    for (let i = 0; i < level; i++) {
      if (i == 0 || i == level-1) {
        row.push(1);
      } else {
        const sum = prevRow[i] + prevRow[i - 1];
        row.push(sum);
      }
    }

    result.push(row);
    level += 1;
  }

  return result;
}

console.log(generate(1))
