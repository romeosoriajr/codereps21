function deleteNode (root, key) {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    const minNode = findMin(root.left);
    root.val = minNode.val;
    root.left = deleteNode(root.left, root.val);
  }

  return root;

  function findMin(node) {
    while (node.right) {
      node = node.right;
    }

    return node;
  }
}


