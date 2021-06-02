function isInterleave(s1, s2, s3) {

  if (s3.length !== s1.length + s2.length) return false;

  const dp = Array(s1.length+1).fill(null).map(() => Array(s2.length+1).fill(false));

  dp[0][0] = true;
  for (let i=1; i <= s1.length; i++) {
    dp[i][0] = dp[i-1][0] && (s1[i-1] == s3[i-1]);
  }

  for (let j=1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j-1] && (s2[j-1] == s3[j-1]);
  }

  for(let i=1; i <=s1.length; i++) {
    for (let j=1; j  <= s2.length; j++) {
      dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1])
    }
  }

  return dp[s1.length][s2.length];


}
const s1 = "aabcc";
const s2 = "dbbca";
const s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3));
