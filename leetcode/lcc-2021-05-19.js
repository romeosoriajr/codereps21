function minMoves2(nums) {

  nums.sort((a,b) => a-b);

  let left = 0;
  let right = nums.length - 1;

  let total = 0;

  while (left < right) {
    total += nums[right]-nums[left];
    left++;
    right--;
  }

  return total;

}

const nums = [1,0,0,8,6];
console.log(minMoves2(nums));
