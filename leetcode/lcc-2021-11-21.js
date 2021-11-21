function buildTree(inorder, postorder) {
  const inStart = 0;
  const inEnd = inorder.length - 1;

  const pStart = 0;
  const pEnd = postorder.length - 1;

  return build(inStart, inEnd, pStart, pEnd);

  function build(inStart, inEnd, pStart, pEnd) {
    if (inStart > inEnd || pStart > pEnd) return null;

    const rootVal = postOrder[pEnd];
    const root = new TreeNode(rootVal);

    let rootIndex = inorder.findIndex(v => v == rootVal);

    root.left = build(
      inStart,
      rootIndex - 1,
      pStart,
      pStart + rootIndex - inStart - 1
    );
    root.right = build(
      rootIndex + 1,
      inEnd,
      pStart + rootIndex - inStart,
      pEnd - 1
    );

    return root;
  }
}

const inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
