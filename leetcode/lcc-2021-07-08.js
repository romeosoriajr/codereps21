function findLength (nums1, nums2) {

  const m = nums1.length;
  const n = nums2.length;

  const dp = Array(m+1).fill(null).map(() => Array(n+1).fill(0))
  let result = 0;

  for (let i=1; i <= m; i++) {
    for (let j=1; j <= n+1; j++) {

      // store the current length when nums1 ends in i and when nums2 ends in j
      if (nums1[i-1] == nums2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
        result = Math.max(dp[i][j], result)
      }
    }
  }

  return result;

}

const nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];

console.log(findLength(nums1, nums2));
