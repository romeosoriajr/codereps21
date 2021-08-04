function subsetsWithDup (nums) {
  nums.sort((a,b) => a-b);
  const result = [];
  const currSet = [];
  helper(result, nums, currSet, 0);
  return result;


  function helper (result, nums, currSet, start) {
    result.push([...currSet]);
    for (let i=start; i < nums.length; i++) {
      if (i == start || nums[i] != nums[i-1]) {
        currSet.push(nums[i]);
        helper(result, nums, currSet, i+1);
        currSet.pop();
      }
    }
  }
}

const nums = [1,2,2];
console.log(subsetsWithDup(nums));
