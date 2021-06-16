function generateParenthesis (n) {

  const result = [];

  helper(result, n, 0, "");

  return result;

  function helper(result, left, right, s) {
    if (!left && !right) {
      result.push(s);
      return;
    }

    if (left > 0) helper(result, left-1, right+1, s+"(");
    if (right > 0) helper(result, left, right-1, s+")");
  }
}

console.log(generateParenthesis(3));
