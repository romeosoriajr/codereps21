function generateTrees(n) {
  return helper(1, n);

  function helper(start, end) {

    const result = [];
    if (start == end) {
      result.push(new TreeNode(start))
      return result;
    }


    for (let i = start; i <= end; i++) {
      const leftSubtrees = i != start ? helper(start, i - 1) : [null]
      const rightSubstrees = i != end ? helper(i + 1, end) : [null]

      for (let left of leftSubtrees) {
        for (let right of rightSubstrees) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          result.push(root);
        }
      }
    }

    return result;
  }
}

