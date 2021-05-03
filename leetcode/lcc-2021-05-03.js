function runningSum(nums) {
  return nums.map(
    function (num) {
      this.sum += num;
      return this.sum;
    },
    { sum: 0 }
  );
}

const nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums));
