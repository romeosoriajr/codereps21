function jump (nums) {

  // this should store the min jumps at each position;
  const dp = Array(nums.length).fill(null);

  dp[0] =0;

  for (let i=0; i < nums.length-1; i++) {
    const maxJumps = nums[i];
  
    for (let j=0; j <= maxJumps && (i+j < dp.length); j++) {

      dp[i+j] = dp[i+j] == null ? dp[i]+1 : Math.min(dp[i+j], dp[i]+1);

    }
  }

  return dp[dp.length-1]

}

console.log(jump([2,3,1]))
