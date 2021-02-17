function letterCasePermutation (S) {

  var result = [];

  helper(S, [], 0);

  return result;


  function helper(S, currentPerm, i) {
    if (i == S.length) {
      result.push(currentPerm.join(''));
      return;
    };

    if (Number.isInteger(Number(S[i]))) {
      currentPerm.push(S[i]);
      helper(S, currentPerm, i+1)
      currentPerm.pop();
    } else {
      var char = S[i];
      currentPerm.push(char.toLowerCase());
      helper(S, currentPerm, i+1)
      currentPerm.pop();
      currentPerm.push(char.toUpperCase());
      helper(S, currentPerm, i+1)
      currentPerm.pop();
    }
  }
  
}

console.log(letterCasePermutation("a1b2"));
