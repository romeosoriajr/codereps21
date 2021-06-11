function stoneGameVII (stones) {
  const n = stones.length;
  let sums = Array(n+1).fill(0);

  for (let i=1; i <=n; i++) {
    sums[i] = sums[i-1] + stones[i-1];
  }

  let dp = Array(n).fill(null).map(() => Array(n).fill(0));

  for (let i=n-2; 0 <=i; --i) {
    for (let j=i+1; j < n; ++j) {
      let left = sums[j] - sums[i] - dp[i][j-1];
      let right = sums[j+1] - sums[i+1] - dp[i+1][j];
      dp[i][j] = Math.max(left, right);
    }
  }

  return dp[0][n-1];

}

const stones = [5,3,1,4,2];
console.log(stoneGameVII(stones));
