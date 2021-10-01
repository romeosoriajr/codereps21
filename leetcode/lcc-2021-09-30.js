function canPartitionKSubsets(nums, k) {
  const sum = nums.reduce((total, num) => (total += num));
  if (sum % k != 0) return false;

  const subsetSum = sum / k;
  const visited = new Array(nums.length).fill(false);

  return helper(0,k,0,0);

  function helper(start, k, currSum, currNum) {
    if (k==1) return true;
    if (currSum == subsetSum && currNum >0) {
      return helper(0,k-1, 0, 0, subsetSum);
    }

    for (let i=start; i<nums.length;i++) {
      if (!visited[i]) {
        visited[i] = true;
        if (helper(i+1, k, currSum + nums[i], currNum+1)) return true;
        visited[i] = false;
      }
    }

    return false;

  }
}

