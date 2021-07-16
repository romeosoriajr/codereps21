function triangleNumber(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < n - 1; j++) {
      while (k < n && nums[k] < nums[i] + nums[j]) k++;
      count += k - j - 1;
    }
    if (count < 0) count = 0;
  }
  return count;
}
console.log(triangleNumber([2, 2, 3, 4]) == 3);
