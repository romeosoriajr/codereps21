function findTilt(root) {

  let result = 0;
  helper(root);

  return result;

  function helper(node) {

    if (!node) return 0;
    
    const leftSum = helper(node.left);
    const rightSum = helper(node.right);

    const tilt = Math.abs(leftSum-rightSum);

    result += tilt;

    return leftSum+rightSum+node.val;

  }
}


