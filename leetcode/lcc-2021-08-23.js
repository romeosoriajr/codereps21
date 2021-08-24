function findTarget(root, k) {
  return helper(root, new Set());
  function helper(root, wanted) {
    if (!root) return false;

    if (wanted.has(root.val)) return true;
    wanted.add(k - root.val);
    return helper(root.left, wanted) || helper(root.right, wanted);
  }
}
