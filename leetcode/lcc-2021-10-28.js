function threeSum(nums) {
  const n = nums.length;
  const result = [];

  nums.sort((a, b) => a - b);

  const seen = nums.reduce((map, num, i) => map.set(num, i), new Map());

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) continue;

      const target = -(nums[i] + nums[j]);

      if (seen.get(target) > j) {
        result.push([nums[i], nums[j], target]);
      }
    }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
