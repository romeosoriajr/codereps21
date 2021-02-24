function scoreOfParentheses (s) {
  var result = 0;

  var stack = [];

  for (let i=0; i < s.length; i++) {

    if (s[i] == '(') {
      stack.push(result);
      result = 0;
    } else {
      result = stack.pop() + Math.max(result*2, 1);
    }

  }

  return result;
}
