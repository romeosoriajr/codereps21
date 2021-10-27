function sortColors(nums) {
  let white = 0;
  let blue = nums.length - 1;
  let pos = 0;

  while (pos <= blue) {
    if (nums[pos] == 2) {
      [nums[pos], nums[blue]] = [nums[blue], nums[pos]];
      blue--;
    } else if (nums[pos] == 1) {
      white++;
      pos++;
    } else {
      const whitePos = pos - white;
      [nums[pos], nums[whitePos]] = [nums[whitePos], nums[pos]];
      pos++;
    }
  }

  return nums;
}

const nums = [2, 0, 1];
//const nums = nums = [1,0,2,1,1,0];
//const nums = nums = [0,0,2,1,1,0];

console.log(sortColors(nums));
