class NumArray {
  constructor(nums) {
    this.nums = nums.reduce((total, num) => {
      let sum = total[total.length-1] + num;
      total.push(sum);
      return total;
    },[0]);
  }

  sumRange(left, right) {
    return this.nums[right+1] - this.nums[left];
  }
}
