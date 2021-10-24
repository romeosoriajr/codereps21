class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countNodes(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  return countNodes(root.left) + countNodes(root.right) + 1;
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);

one.left = two;
one.right = three;

two.left = four;
two.right = five;
three.left = six;

console.log(countNodes(one));
