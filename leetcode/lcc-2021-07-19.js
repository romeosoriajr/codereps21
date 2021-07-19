function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  if (root.val == p.val || root.val == q.val) {
    return root;
  }

  const left = helper(root.left, p, q);
  const right = helper(root.right, p, q);

  if (right && left) {
    return root;
  } else if (!right) {
    return left;
  }
  return right;
}

