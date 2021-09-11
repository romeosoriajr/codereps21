function numberOfArithmeticSlices(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(null).map(() => new Map());

  let result = 0;
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      const diff = nums[j] - nums[i];
      const count = dp[i].get(diff) || 0;

      dp[j].set(diff, (dp[j].get(diff) || 0) + count + 1);
      result += count;
    }
  }

  return result;
}

const nums = [7, 7, 7, 7, 7];
console.log(numberOfArithmeticSlices(nums));
