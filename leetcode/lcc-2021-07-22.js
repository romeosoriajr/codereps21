function partitionDisjoint(nums) {

  const minRight = new Array(nums.length).fill(null);
  minRight[minRight.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    minRight[i] = Math.min(minRight[i + 1], nums[i]);
  }

  let currMax = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    currMax = Math.max(currMax, nums[i]);

    if (currMax <= minRight[i + 1]) return i + 1;
  }

  return -1;
}

const nums = [1, 1, 1, 0, 6, 12];
console.log(partitionDisjoint(nums));
