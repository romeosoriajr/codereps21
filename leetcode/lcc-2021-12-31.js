function maxAncestorDiff(root) {

  return helper(root, root.val, root.val);

  function helper(root, min, max) {
    if (!root) return 0;

    let currMin = Math.min(root.val, min);
    let currMax = Math.max(root.val, max);

    let left = helper(root.left, currMin, currMax);
    let right = helper(root.right, currMin, currMax);

    return Math.max(currMax - currMin, left, right);
  }
}

