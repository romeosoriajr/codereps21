function flipMatchVoyage (root, voyage) {
  var flipped = [];
  var index = 0;

  return dfs(root, voyage) ? flipped : [-1];

  function dfs(root, voyage) {
    if (!root) return true;

    if (root.val !== voyage[index]) {
      return false;
    }

    index += 1;

    if (root.left && root.left.val !== voyage[index]) {
      flipped.push(root.val);
      // switch the dfs order from left to right to right to left;
      return dfs(root.right, voyage) && dfs(root.left, voyage);
    }

    return dfs(root.left, voyage) && dfs(root.right, voyage);
  }
}
