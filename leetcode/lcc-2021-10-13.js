//iterative
function bstFromPreorder(preorder) {
  if (!preorder.length) return undefined;

  const root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i++) {
    let current = root;

    let newNode = new TreeNode(preorder[i]);

    while (current) {
      if (newNode.val < current.val) {
        if (!current.left) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  return root;
}

function bstFromPreorderRecursive(preorder) {
  const root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i++) {
    helper(root, preorder[i]);
  }

  return root;

  function helper(node, val) {
    if (node.val > val) {
      if (!node.left) {
        node.left = new TreeNode(val);
      } else {
        helper(node.left, val);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(val);
      } else {
        helper(node.right, val);
      }
    }
  }
}

const preorder = [8, 5, 1, 7, 10, 12];
