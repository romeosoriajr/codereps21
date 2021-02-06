function rightSideView (root) {
  var result = [];
  if (!root) return result;

  var queue = [];
  queue.push(root);

  while (queue.length) {
    var breadth = queue.length;

    for (let i=0; i < breadth; i++) {

      var node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      // the last element in the queue for current level
      if (i == breadth-1) {
        result.push(node.val);
      }
    }

  }

  return result;

}
