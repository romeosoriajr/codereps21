function rob(root) {

  return Math.max(...dfs(root));

  function dfs(root) {
    if (!root) return [0,0];

    const left = dfs(root.left);
    const right = dfs(root.right);

    const result = [0,0];

    // not robbed
    result[0] = Math.max(...left) + Math.max(...right);

    //robbed.. can only add root val, the neighbors 'not robbed' value
    result[1] = root.val + left[0] + right[0];

    return result;

  }
}


