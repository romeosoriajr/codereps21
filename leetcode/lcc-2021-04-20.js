function preorder (root) {

  var queue = [];
  var result = [];
  if (!root) return result;
  queue.push(root);

  while (queue.length) {
    var curr = queue.pop();

    result.push(curr.val);

    for (let i = curr.children.length-1; i >= 0; --i) {
      queue.push(curr.children[i]);
    }

  }

  return result;

}
function preorderRecursive (root) {

  var result = [];

  helper(root);
  return result;

  function helper(root) {
    if (!root) return;

    result.push(root.val);

    for (let child of root.children) {
      helper(child);
    }
  }

}


