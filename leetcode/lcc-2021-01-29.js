function TreeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var one = new TreeNode(1);
var two = new TreeNode(2);
var three = new TreeNode(3);
var four = new TreeNode(4);
var five = new TreeNode(5);
var six = new TreeNode(6);
var seven = new TreeNode(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

var root = one;

console.log(verticalTraversal(root));

function verticalTraversal (root) {

  var arr = [];
  helper(root, 0, 0);

  arr.sort((a, b) => a.x - b.x);

  var result = [];
  var i = 0;

  while (i < arr.length) {
    let j=i;
    let tmp = [];
    while (j+1<arr.length && arr[j+1].x == arr[j].x){
      tmp.push(arr[j++]);
    }

    tmp.push(arr[j]);
    tmp.sort((a, b) => {
      return a.y == b.y ? a.val - b.val : a.y - b.y;
    });

    result.push(tmp.map(i=> i.val));
    i=j+1;
  }

  return result;

  function helper(root, x, y) {
    if (!root) return;

    arr.push({x, val: root.val, y});
    helper(root.left, x-1, y+1);
    helper(root.right, x+1, y+1);
  };

}
