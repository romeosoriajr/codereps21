function minCameraCover(root) {

  let count=0;

  return (!helper(root) ? 1 : 0) + count;

  // helper should return the state of the node
  // check if its a leaf
  // or if its parent of a leaf with a camera
  // or if its in the range of a camera
  function helper(node) {
    if (!node) return 2;

    const left = helper(node.left);
    const right = helper(node.right);

    // put a camera at current node if the child is a leaf
    if (!left || !right) {
      count += 1;
      return 1;
    }


    // if the child has a camera, no camera needed
    return (left == 1 || right == 1) ? 2 : 0;

  }

}
