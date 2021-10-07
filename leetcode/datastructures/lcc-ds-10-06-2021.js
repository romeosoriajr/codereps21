function containsDuplicate(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }

  return false;
}

function maxSubArray(nums) {

  let curr = nums[0];
  let max = nums[0];

  for (let i=1; i < nums.length; i++) {
    curr = Math.max(nums[i], nums[i] + curr);
    max = Math.max(curr, max);
  }

  return max;
}

