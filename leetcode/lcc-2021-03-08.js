function removePalindromeSub (s) {
  // string contains only a & b
  // if string is palindrome, only one pass is needed
  // if it cant be a palindrome, it needs two passes

  if (!s.length) return 0;

  var start=0;
  var end = s.length-1;

  while (start < end) {
    if (s[start] == s[end]) {
      i++;
      j--;
    } else {
      return 2;
    }
  }

  return 1;
}

console.log(removePalindromeSub('ababa'))
