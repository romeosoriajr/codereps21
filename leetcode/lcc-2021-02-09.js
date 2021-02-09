function convertBST (root) {

  var sum = 0;
  helper(root);

  return root;

  function helper(root) {
    if (!root) return;

    helper(root.right);
    root.val += sum;
    sum = root.val;
    helper(root.left);
  }

}
