function combinationSum4(nums, target) {
  var targets = new Array(target+1).fill(null);
  targets[0] = 1;

  for (let i=0; i < targets.length; i++) {
    for (let j=0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        targets[i] += targets[i-nums[j]];
      }
    }
  }

  return targets[target];

}
function combinationSum4Recursive (nums, target) {

  if (target == 0) {
    return 1;
  }
  var result = 0;

  for (let i=0; i < nums.length; i++) {
    if (target >= nums[i]) {
      result += combinationSum4(nums, target - nums[i]);
    }
  }

  return result;
}

const nums = [1,2,3];
const target = 4;
console.log(combinationSum4(nums, target));
