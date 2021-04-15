function fibBottomUpSlim(n) {
  var [a, b] = [0, 1];

  for (let i=0; i < n; i++) {
    [a, b] = [b, a+b];
  }

  return a;
}

function fibBottomUp(n) {

  var dp = new Array(n+1).fill(null);

  dp[0] = 0;
  dp[1] = 1;

  for (let i=2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  console.log(dp);
  return dp[n]

}

function fibMemo(n) {
  var memo = new Array(n+1).fill(null);

  return fib(n);
  
  function fib (n) {

    if (memo[n] !== null) {
      return memo[n];
    }

    if (n == 1 || n == 0) {
      memo[n] = n;
    } else {
      memo[n] = fib(n-1) + fib(n-2);
    }

    return memo[n];

  }

}

console.log(fibBottomUp(4));
