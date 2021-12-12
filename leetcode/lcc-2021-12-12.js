function canPartition(nums) {
  const totalSum = nums.reduce((t, n) => t + n);

  if (totalSum & 1) return false;

  const targetSum = totalSum / 2;

  const dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;

  
  for (let num of nums) {
    for (let i = targetSum; i >= 0; i--) {
      if (dp[i - num]) {
        dp[i] = true;
      }
    }
  }

  return dp[targetSum];
}

const nums = [1, 5, 11, 5];
console.log(canPartition(nums));
