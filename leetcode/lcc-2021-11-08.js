// all values left of root has to be less than root val
// values to the right, should be greater;
//
//          i
//       /     \
//  tree(1)   tree(3)
//    i-1       n-i     
//

function numTrees(n) {

  const dp = new Array(n+1).fill(null);

  dp[0] = 1;
  dp[1] = 1;

  for (let i=2; i < n; i++) {
    for (let j=1; j <= i; j++) {
      dp[i] += dp[j-1] * dp[i-j];
    }
  }

  return dp[n];

}


