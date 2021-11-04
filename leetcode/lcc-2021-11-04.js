function sumOfLeftLeaves(root) {
  if (!root) return 0;

  return dfs(root, false);

  function dfs(root, isLeft) {
    if (!root) return 0;

    if (isLeft && !root.left && !root.right) return root.val;

    return dfs(root.left, true) + dfs(root.right, false);
  }
}
