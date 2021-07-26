function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
function sortedArrayToBST(nums) {
  return helper(nums, 0, nums.length - 1);

  function helper(nums, low, high) {
    if (low > high) {
      return null;
    }

    const mid = Math.round((low + high) / 2);

    const node = new TreeNode(nums[mid]);

    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);

    return node;
  }
}
