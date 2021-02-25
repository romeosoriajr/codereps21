function findUnsortedSubarray(nums) {

  var length = nums.length;
  var max = nums[0];
  var min = nums[nums.length-1];

  var left = -2;
  var right = -1;

  for (let i=1; i < nums.length; i++) {
    var currLeft = i;
    var currRight = length-1-i;

    max = Math.max(max, nums[currLeft]);
    min = Math.min(min, nums[currRight])

    if (nums[currLeft] < max) left = i;

    if (nums[currRight] > min) right = currRight;

  }

  return left - right + 1;

  
}

console.log(findUnsortedSubarray([1,2,3,4]))
