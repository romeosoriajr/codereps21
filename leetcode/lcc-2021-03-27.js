//visit each mid
//at each mid check if its a palindrome
//if it is, expand the substring
function countSubstrings(s) {

  var total = 0;

  for (let i=0; i < s.length; i++) {
    total += check(i, i);
    total += check(i, i+1);
  }

  return total;

  function check(left, right) {

    var count = 0;

    while (left >= 0 && right < s.length && s[left] == s[right]) {
      count += 1;
      left -= 1;
      right += 1;
    }

    return count;
  }
}

