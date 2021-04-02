function findMaxForm(strs, m, n) {

  var zero = 0;
  var one = 0;

  var dp = new Array(m+1).fill(null).map(() => new Array(n+1).fill(0));


  for (str of strs) {
    zero = 0;
    one = 0;

    for (let i=0; i < str.length; i++) {
      if (str[i] == '0') {
        zero++;
      } else {
        one++;
      }
    }

    for (let i=m; i >= zero; i--) {
      for (let j=n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i-zero][j-one]+1);
      }
    }
  }

  return dp[m][n];
}
//TLE
function findMaxFormRecursive (strs, m, n) {

  var map = strs.reduce((map, str) => {
    var m = 0
    var n = 0;

    str.split('').forEach(char => char == '0' ? m += 1 : n += 1)

    map.set(str, [m, n]);
    return map;
  }, new Map())

  var largest = 0;
  var visited = new Array(strs.length).fill(false);

  helper(map, 0, 0, 0);

  function helper(map, currM, currN, currLength) {

    largest = Math.max(largest, currLength);

    for (let i=0; i < strs.length; i++) {

      var str = strs[i];
      if (visited[i]) continue;

      visited[i] = true;

      var [localM, localN] = map.get(str);
      var totalM = currM + localM;
      var totalN = currN + localN;

      if (totalM <= m && totalN <= n) helper(map, totalM, totalN, currLength+1)
      visited[i] = false;

    }

  }

  return largest;

}

console.log(findMaxForm(["10", "0", "1"], 1, 1))
//console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3))
