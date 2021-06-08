function TreeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function buildTree (preorder, inorder) {

  return helper(0, 0, inorder.length-1, preorder, inorder);

  function helper(pStart, iStart, iEnd, preorder, inorder) {
    if (pStart > preorder.length-1 || iStart > iEnd) return;

    const root = new TreeNode(preorder[pStart]);
    let iIndex = 0;

    for (let i=iStart; i <= iEnd; i++) {
      if (inorder[i] == root.val) {
        iIndex = i;
      }
    }

    root.left = helper(pStart+1, iStart, iIndex-1, preorder, inorder);
    root.right = helper(pStart+iIndex-iStart+1, iIndex+1, iEnd, preorder, inorder);

    return root;
  }


}

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder))
