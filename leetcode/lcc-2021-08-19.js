function maxProduct(root) {
  let result = 0;
  let total = 0;
  let sub = null;

  total = helper(root); // find total sum of tree first
  helper(root); //run fn again since total is established

  return result % (10**9 +7);

  function helper(root) {
    if (!root) return 0;
    sub = root.val + helper(root.left) + helper(root.right);
    result = Math.max(result, sub * (total - sub));
    return sub;
  }
}

