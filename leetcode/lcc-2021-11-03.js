function sumNumbers(root) {

  return helper(root, 0, 0);

  function helper(root, currPath, total) {
    if (!root) return total;

    currPath = (currPath*10) + root.val;
    if (!root.left && !root.right) {
      return total + currPath;
    } else {
      return helper(root.left, currPath, total) + helper(root.right, currPath, total);
    }
  }
}
