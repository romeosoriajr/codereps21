// ## means its a leaf
function isValidSerialization(preorder) {
  const stack = [];
  const vals = preorder.split(',');

  for (let val of vals) {
    while (val == '#' && !!stack.length && stack[stack.length-1] == '#') {
      stack.pop();
      if (!stack.length) return false;
      stack.pop();
    }
    stack.push(val);
  }

  return stack.length == 1 && stack[stack.length-1] == '#'
}

