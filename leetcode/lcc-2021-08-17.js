function goodNodes(root) {
  return helper(root, 0, root.val);

  function helper(root, count, maxVal) {
    if (!root) return count;

    if (root.val >= maxVal) count++;

    count = helper(root.left, count, Math.max(root.val, maxVal));
    count = helper(root.right, count, Math.max(root.val, maxVal));

    return count;
  }
}
