function getTargetCopy (original, cloned, target) {

  if (!original) return null;

  if (original == target) return cloned;

  return getTargetCopy(original.left, cloned.left, target) ||
  getTargetCopy(original.right, cloned.right, target)

}
