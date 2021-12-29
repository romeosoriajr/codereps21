function connect(root) {
  if (!root) return root;

  if (root.left) {
    let { left, right } = root;
    connect(left);
    connect(right);
    while (left) {
      left.next = right;
      left = left.right;
      right = right.left;
    }
  }

  return root;
}
