class NumArray {
  constructor(nums) {
    this.nums = [...nums];
    this.prefix = [0];

    for (let i=0; i < this.nums.length; i++) {
      this.prefix[i+1] = this.prefix[i]+this.nums[i];
    }
  }

  update(index, val) {
    const diff = val - this.nums[index];

    this.nums[index] = val;

    for (let i=index+1; i < this.prefix.length; i++) {
      this.prefix[i] += diff;
    }

  }

  sumRange(left, right) {
    return this.prefix[right+1] - this.prefix[left];
  }
}

const arr = new NumArray([-1]);
console.log(arr.sumRange(0, 0));
arr.update(0, 1);
console.log(arr.sumRange(0, 0));
