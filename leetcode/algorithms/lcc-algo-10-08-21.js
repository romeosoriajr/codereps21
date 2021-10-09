function moveZeroes(nums) {
  let zeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroes++;
    } else {
      // swap the non zero with the first zero in the group;
      [nums[i], nums[i - zeroes]] = [nums[i - zeroes], nums[i]];
    }
  }

  return nums;
}

function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum == target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
}
