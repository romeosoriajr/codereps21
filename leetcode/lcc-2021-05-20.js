function levelOrder (root) {

  const queue = [root];
  const result = [];
  while (queue.length) {

    const count = queue.length;
    const level = [];

    for(let i=0; i < count; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (!level.length) continue;
    result.push(level);

  }

  return result;

}

function levelOrderRecursive (root) {
  if (!root) return [];

  return helper(root, [], 0);

  function helper(root, result, level) {
    if (!root) return;
    if (!result[level]) result[level] = [];

    result[level].push(root.val);

    helper(root.left, result, level+1);
    helper(root.right, result, level+1);

    return result;

  }

}
