function TreeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function addOneRow (root, v, d) {
  if (d==1) {
    var newRoot = new TreeNode(v);
    newRoot.left = root;

    return newRoot;
  }

  var N = d-1;
  var result = helper(root, 1);

  return result;

  function helper(root, currDepth) {

    if (!root) return;

    if (currDepth == N) {
      var newLeft = new TreeNode(v);
      newLeft.left = root.left;

      var newRight = new TreeNode(v);
      newRight.right = root.right;

      root.left = newLeft;
      root.right = newRight;
    }
    helper(root.left, currDepth+1);
    helper(root.right, currDepth+1);

  }

}

var four = new TreeNode(4);
var two = new TreeNode(2);
var three = new TreeNode(3);
var one = new TreeNode(1);

four.left = two;
two.left = three;
two.right = one;

console.log(addOneRow(four, 1, 3));
