function lengthOfLIS (nums) {

  const dp = Array(nums.length).fill(1);

  for (let i=1; i < nums.length; i++) {

    for (let j=0; j < i; j++) {
      if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1
      }
    }
  }

  return Math.max(...dp);
}


const nums = [7,7,7,7,7];
console.log(lengthOfLIS(nums));
