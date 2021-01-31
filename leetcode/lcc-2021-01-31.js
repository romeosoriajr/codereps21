function nextPermutation(nums) {

  var pivotIndex = -1;
  var pivotValue = 0;
  var numsLength = nums.length-1;

  for (let i=numsLength-1; i >= 0; i--) {
    if (nums[i] < nums[i+1]) {
      pivotIndex = i;
      pivotValue = nums[i];
      break;
    }
  }

  //if no ascending value is found, reverse all nums
  if (pivotIndex == -1) {
    reverse(nums, 0, numsLength);
    return;
  }

  for (let i=numsLength; i >=0; i--) {
    if (nums[i] > pivotValue) {
      [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
      break;
    }
  }

  reverse(nums, pivotIndex+1, numsLength);

  function reverse(nums, start, end) {
    var left = start;
    var right = end;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
      right -= 1;
    }
  }

  return nums;
}

var nums = [1,2,3];
console.log(nextPermutation(nums));
