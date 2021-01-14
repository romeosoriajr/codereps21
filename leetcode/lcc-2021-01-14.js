// sliding window
// instead of going down to zero
// look for the max subarray total that equals totalSum subtracting x
function minOperations (nums, x) {

  var totalSum = nums.reduce((total, num) => total+num);
  var goal = totalSum - x;

  if (goal < 0) return -1;
  if (goal == 0) return nums.length;

  var prefix = 0;
  var currSum = 0;

  var result = -1;

  for (let suffix=0; suffix < nums.length; ++suffix) {

    if (currSum < goal) {
      currSum += nums[suffix];
    }

    while (currSum >= goal) {
      if (currSum == goal) {
        var length = suffix - prefix + 1;
        result = Math.max(result, length);
      }

      currSum -= nums[prefix];
      prefix++;

    }

  }

  return result == -1 ? -1 : nums.length-result;
}

console.log(minOperations([3,2,20,1,1,3], 10))
