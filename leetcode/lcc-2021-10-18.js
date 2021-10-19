function isCousins(root, x, y) {
  const queue = [];
  queue.push([root, new TreeNode(null)]);

  while (queue.length) {
    const breadth = queue.length;

    let child1;
    let child2;
    for (let i = 0; i < breadth; i++) {
      const curr = queue.shift();

      const [currNode] = curr;

      if (!currNode) continue;

      if (currNode.val == x || currNode.val == y) {
        if (!child1) {
          child1 = curr;
        } else {
          child2 = curr;
        }
      }

      if (child1 && child2) {
        if (child1[1] !== child2[1]) return true;
      }
      queue.push([currNode.left, currNode], [currNode.right, currNode]);
    }
  }

  return false;
}


