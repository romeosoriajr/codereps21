function rangeSumBST(root, low, high) {
  if (!root) return 0;

  let result = low <= root.val && root.val <= high ? root.val : 0;

  if (root.val > low) result += rangeSumBST(root.left, low, high);
  if (root.val < high) result += rangeSumBST(root.right, low, high);

  return result;
}

function rangeSumBSTBFS(root, low, high) {
  const queue = [root];

  let sum = 0;

  while (queue.length) {
    const breadth = queue.length;

    for (let i = 0; i < breadth; i++) {
      const node = queue.shift();

      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return sum;
}
