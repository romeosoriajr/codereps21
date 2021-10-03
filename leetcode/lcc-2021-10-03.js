function canJump (nums) {

  const n = nums.length;
  const dp = new Array(n).fill(false);
  dp[0] = true;

  for (let i=0; i < n && dp[i]; i++) {
    const jumps = nums[i];

    for (let j=1; j <= jumps && (j+i < n); j++) {
      dp[j+i] = true;
    }
  }

  return dp[n-1];
}


function canJumpRecursive(nums) {
  const n = nums.length;

  return helper(0);

  function helper(start) {
    if (start == n-1) return true;

    const jumps = nums[start];
    if (jumps == 0) return false;

    for (let jump = 1; jump <= jumps && start + jump < n; jump++) {
      if (helper(start + jump)) {
        return true;
      }
    }

    return false;
  }
}

const nums = [2,3,1,1,4];
console.log(canJump(nums));
