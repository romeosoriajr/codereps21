function rob(nums) {

  const n = nums.length - 1;

  const dp = [nums[0], Math.max(nums[0], nums[1])]

  for (let i=2; i <= n; i++) {
    const pos = i%2;

    // ^ is xor
    // pos ^ 1 is saying value XOR 1.. if its the same, it results zero, else 1
    dp[pos] = Math.max(dp[pos]+nums[i], dp[pos^1])
  }

  return dp[n % 2]
}

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums)==12);
