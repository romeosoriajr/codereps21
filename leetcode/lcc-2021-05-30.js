function maximumGap (nums) {
  if (nums.length < 2) return 0;
  nums.sort((a,b) => a-b);

  let result = 0;

  for (let i=0; i < nums.length-1; i++) {
    result = Math.max(result, nums[i+1]-nums[i]);
  }

  return result;
}
