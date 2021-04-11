function deepLeavesSumBFS (root) {
// unnecessarily does a sum at every level
  var queue = [];
  queue.push(root);
  var sum;

  while (queue.length) {
    sum = 0;
    var length = queue.length;

    for (let i=0; i < length; i++) {
      var curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      sum += curr.val;
    }
    
  }

  return sum;

}
function deepestLeavesSumDFS (root) {

  var deep = 0;

  var sum = 0;

  dfs(root, 0);
  
  function dfs (root, level) {
    if (!root) return;

    dfs(root.left, level + 1);

    if (level > deep) {
      deep = level;
      sum = 0;
    }

    if (level == deep) {
      sum += root.val;
    }

    dfs(root.right, level + 1);
  }

  return sum;

}
