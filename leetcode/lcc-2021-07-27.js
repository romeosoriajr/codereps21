function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  //closest means its the difference from target and sum is near 0

  const n = nums.length;
  let minDiff = Number.MAX_SAFE_INTEGER;
  let closestSum = null;

  for (let i = 0; i < n - 2; i++) {
    const firstNum = nums[i];

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currSum = firstNum + nums[left] + nums[right];

      const currDiff = Math.abs(target - currSum);

      if (currDiff < minDiff) {
        minDiff = currDiff;
        closestSum = currSum;
      }

      if (currSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closestSum;
}

console.log(threeSumClosest([0, 1, 2], 3));
