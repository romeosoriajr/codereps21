function checkPossibility(nums) {
  var flipped = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      flipped += 1;

      if (
        flipped ||
        (i > 1 &&
          i < nums.length - 1 &&
          nums[i - 2] > nums[i] &&
          nums[i + 1] < nums[i - 1])
      ) {
        return false;
      }
    }
  }

  return true;
}
