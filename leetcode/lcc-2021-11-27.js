function productExceptSelf (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let pre = 1;
  let suf = 1;

  for (let i=0; i < n; i++) {
    result[i] *= pre;
    pre *= nums[i];
    result[n-1-i] *= suf;
    suf *= nums[n-1-i];
  }

  return result;
}

const nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));
