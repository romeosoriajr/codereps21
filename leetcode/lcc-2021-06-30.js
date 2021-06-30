function TreeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function lowestCommonAncestor(root, p, q) {
  if (!root || root == p || root == q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left && !right) return null;
  if (left && right) return root;
  return left || right;

}

const zero = new TreeNode(0);
const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);
const eight = new TreeNode(8);

const root = three;
three.left = five;
three.right = one;
five.left = six;
five.right = two;
one.left = zero;
one.right = eight;
two.left = seven;
two.right = four;


const p = five;
const q = four;
console.log(lowestCommonAncestor(root, p, q));
