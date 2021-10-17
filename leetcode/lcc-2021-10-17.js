function pathSum(root, targetSum) {
  let total = 0;

  // key is a previous sum value, value is paths that have the sum;
  const prevSums = new Map();
  prevSums.set(0, 1);
  helper(root, 0);

  return total;

  function helper(root, currSum) {
    if (!root) return null;

    currSum += root.val;

    const diff = currSum - targetSum;

    // if the difference exists, add the number of paths to result;
    total += prevSums(diff) || 0;

    prevSums.set(currSum, (prevSums.get(currSum) || 0) + 1);

    helper(root.left, currSum);
    helper(root.right, currSum);

    // backtrack
    prevSums.set(currSum, prevSums.get(currSum) - 1);
  }
}


