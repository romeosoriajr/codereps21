function pathSum(root, targetSum) {
  const result = [];

  helper(root, [], 0, targetSum);

  return result;

  function helper(root, currPath, currSum, targetSum) {
    if (!root) return;

    currPath.push(root.val);
    currSum += root.val;

    if (!root.left && !root.right) {
      if (currSum == targetSum) {
        result.push([...currPath]);
      }
    } else {
      helper(root.left, currPath, currSum, targetSum);
      helper(root.right, currPath, currSum, targetSum);
    }

    currSum -= root.val;
    currPath.pop();
  }
}

// dfs
// if node is a leaf
// if sum equals target, push the path to result
