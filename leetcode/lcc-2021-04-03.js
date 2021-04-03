function longestValidParentheses (s) {

  var l = s.length;

  var result = 0;
  var stack = [-1];

  for (let i=0; i < l; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        result = Math.max(result, i - stack[stack.length-1]);
      }
    }
  }
  return result;

}

console.log(longestValidParentheses(')()())'))
