function diameterOfBinaryTree(root) {
  let result = 0;
  dfs(root);

  return result;

  function dfs(root) {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  }
}


