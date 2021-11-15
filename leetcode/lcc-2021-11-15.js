function largestDivisibleSubset(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let maxIndex = 0;

  const dp = new Array(n).fill(1);
  const pred = new Array(n).fill(-1);
  const result = [];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if ((nums[i] % nums[j] === 0) & (dp[i] < dp[j] + 1)) {
        dp[i] = dp[j] + 1;
        pred[i] = j;
      }
    }
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  while (maxIndex >= 0) {
    result.push(nums[maxIndex]);
    maxIndex = pred[maxIndex];
  }

  return result;
}

const nums = [1, 2, 4, 8];
console.log(largestDivisibleSubset(nums));
