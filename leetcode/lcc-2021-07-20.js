class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  shuffle() {
    const clone = [...this.nums];

    for (let i = 0; i < clone.length; i++) {
      const j = parseInt(Math.random() * (clone.length - i) + i);
      const temp = clone[i];
      clone[i] = clone[j];
      clone[j] = temp;
    }

    return clone;
  }

  reset() {
    return this.nums;
  }
}

const stuff = new Solution([1,2,3])
console.log(stuff.shuffle());
console.log(stuff.reset());
console.log(stuff.shuffle());
