function longestPalindrome (s) {
  var pStart = 0;
  var maxLength = 0;

  var dp = new Array(s.length).fill(null)
            .map(() => new Array(s.length).fill(null));

  for (let i = s.length-1; i >= 0; i--) {
    for (let j=i; j < s.length; j++) {

      dp[i][j] = (s[i] == s[j]) &&
                (j-i < 3 || dp[i+1][j-1]);

      if (dp[i][j] && (j-i+1 > maxLength)) {
        pStart = i;
        maxLength = j-i+1;
      }
    }
  }

  return s.substring(pStart, pStart+maxLength)
}

console.log(longestPalindrome("cbbd"));
