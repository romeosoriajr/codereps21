function findMaxConsecutiveOnes(nums) {
  let local = 0;
  let max = 0;

  for (let num of nums) {
    local = num == 0 ? 0 : local + 1;
    max = Math.max(max, local);
  }
  return max;
}
const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
