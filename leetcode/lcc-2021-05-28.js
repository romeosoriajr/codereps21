function maximumUniqueSubarray (nums) {

  let start = 0;
  let end = 0;
  const seen = new Set();
  let n = nums.length;
  let sum = 0;
  let result = 0;

  while (end < n) {

    if (!seen.has(nums[end])) {
      sum += nums[end];
      seen.add(nums[end]);
      end++;
    } else {
      seen.delete(nums[start]);
      sum -= nums[start]
      start++;
    }

    result = Math.max(sum, result);

  }

  return result;
  
}

console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]));
