function rob(nums) {


  const n = nums.length;
  // store 2 dp?
  // one dp if the house has been robbed
  // another dp if the house hasnt been robbed;

  const robbed = new Array(n).fill(null);
  const locked = new Array(n).fill(null);

  robbed[0] = nums[0];
  locked[0] = 0;
  for (let i=1; i < n; i++) {
    locked[i] = Math.max(robbed[i-1], locked[i-1]);

    // can only add to the this array by getting value from the locked value and adding the current value of house to be robbed
    robbed[i] = locked[i-1] + nums[i];
  }

  return Math.max(robbed[n-1], locked[n-1])

}

const nums = [1,2,3,1];

console.log(rob(nums));
