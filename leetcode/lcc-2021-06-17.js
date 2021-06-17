function numSubarrayBoundedMax (nums, left, right) {

  let result = 0;

  let start = -1;
  let end = -1;

  for (let i=0; i < nums.length; i++) {
    //nums in subarray should at least be of left value;
    if (nums[i] >= left) end = i;

    //if currnum becomes more than right, reset the curr length;
    if (nums[i] > right) start = i;
    result += end - start;
  }

  return result;
}

console.log(numSubarrayBoundedMax([2,1,4,3], 2,3))
