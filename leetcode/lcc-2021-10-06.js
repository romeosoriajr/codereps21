function findDuplicates(nums) {
  const result = [];

  nums.sort((a,b) => a-b);

  for (let i=1; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) {
      result.push(nums[i]);
    }
  }

  return result;
}


const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));
