function canJump(nums) {
  const n = nums.length;
  const jumped = new Array(n + 1).fill(false);

  jumped[0] = true;

  for (let i = 0; i < n; i++) {
    if (jumped[i]) {
      const maxJumps = nums[i];
      let j = 0;

      while (j <= maxJumps && i + j <= n) {
        jumped[i + j] = true;
        j++;
      }
    }
  }

  return jumped[n];
}

function jumpTopDown(nums) {

  const n = nums.length;
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)

  dp[0] = 0;

  for (let i=0; i < n; i++) {

    for (let j=0; j <= nums[i]; j++) {
      //update the dp positions it can reach
      dp[i+j] = Math.min(dp[i+j], dp[i] +1);

    }

  }

  return dp[n-1];
}
//bottom up
function jump(nums) {

  const n = nums.length;

  //keep track of the lowest num jumps at each pos;
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);

  dp[n - 1] = 0;

  // iterate backwards
  for (let i = n - 2; i >= 0; i--) {

    // at each nums location, update the jumps going right;
    for (let jump = 1; jump <= nums[i]; jump++) {
      dp[i] = Math.min(dp[i], dp[Math.min(jump + i, n - 1)] + 1);
    }
  }

  return dp[0];
}

function maxSubarray(nums) {

  let result = nums[0];
  let currSum = nums[0];
  for (let i=1; i < nums.length; i++) {

    currSum = Math.max(currSum + nums[i], nums[i]);
    result = Math.max(currSum, result);


  }

  return result;

}
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarray(nums));
