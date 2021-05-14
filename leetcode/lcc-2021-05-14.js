function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function flatten(root) {
  if (!root) return;

  const left = root.left;
  const right = root.right;

  root.left = null;

  flatten(left);
  flatten(right);

  root.right = left;
  
  //iterate to the last right child
  //to reattach the previously disconnected one
  let curr = root;
  while (curr.right) {
    curr = curr.right;
  }

  curr.right = right;

}


const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);

const root = one;

root.left = two;
root.right = five;
two.left = three;
two.right = four;
five.right = six;

console.log(flatten(root));
