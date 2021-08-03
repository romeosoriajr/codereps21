function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const comp = target - currNum;

    if (comp in map) return [i, map[comp]];
    map[currNum] = i;
  }

  return [-1, -1];
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));
