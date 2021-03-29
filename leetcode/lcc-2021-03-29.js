function flipMatchVoyage (root, voyage) {

  var result = [];
  var i = 0;

  return dfs(root, voyage) ? result : [-1];

  function dfs(root, voyage) {
    if (!root) return true;
    if (root.val != voyage[i]) {
      return false;
    }

    i++;

    if (root.left && root.left.val != voyage[i]) {
      result.push(root.val);
      return dfs(root.right, voyage) && dfs(root.left, voyage);
    }

    return dfs(root.left, voyage) && dfs(root.right, voyage);
  }
}

// dont have to actually flip the nodes..
// just keep track of which should be flipped.
