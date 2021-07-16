function fourSum(nums, target) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const result = [];
  for (let i=0; i < n; i++) {
    for (let j=i+1; j < n; j++) {
      let left = j+1;
      let right = n-1;
      let remainder = target - nums[i] - nums[j];

      while (left < right) {
        if (nums[left] + nums[right] == remainder) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          ++left;
          --right;
          while (left < right && nums[left-1] == nums[left]) ++left;
        } else if (nums[left] + nums[right] > remainder) {
          --right;
        } else {
          ++left;
        }
      }

      while (j+1 < n && nums[j] == nums[j+1]) ++j;
    }
    while (i+1 < n && nums[i] == nums[i+1]) ++i;
  }

  return result;

}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

console.log(fourSum(nums, target));
