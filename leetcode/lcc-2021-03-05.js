function averageOfLevels (root) {

  var queue = [root];

  var result = [];

  while (queue.length) {
    
    var sum = 0;
    var breadth = queue.length;

    for (let i=0; i < breadth; i++) {
      var node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum/breadth);

  }

  return result;

}
