function trimBST (root, low, high) {

  return dfs(root);

  function dfs (root) {
    if (!root) return null;

    if (root.val > high) {
      return dfs(root.left);
    } else if (root.val < low) {
      return dfs(root.right);
    }

    root.left = dfs(root.left);
    root.right = dfs(root.right);

    return root;
  }
}
