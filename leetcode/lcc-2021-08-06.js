function levelOrder(root) {
  if (!root) return [];

  const result = [];

  const queue = [root];

  while (queue.length) {
    const levelVals = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();

      levelVals.push(node.val);

      if (node.children.length > 0) {
        queue.push(...node.children);
      }
    }

    result.push(levelVals);
  }

  return result;
}
