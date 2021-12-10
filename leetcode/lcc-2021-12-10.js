function numTilings(n) {

  // two states
  // one can be flushed
  // one with a domino sticking out

  const mod = 10 ** 9 + 7;

  const dp = new Array(n + 1).fill(null).map(() => new Array(2).fill(null));

  //initialize for base cases;
  dp[0] = [0, 0];
  dp[1] = [1, 1];
  dp[2] = [2, 2];

  for (let i = 3; i <= n; i++) {
    // flushed state;
               //vert dom      //horizontal   // protruding, but can flip
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + 2 * dp[i - 2][1]) % mod;

    // protruding
    //          //vertical    // protruding. dont need twice, since this state is already protruding
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][1]) % mod;
  }

  return dp[n][0];
}


