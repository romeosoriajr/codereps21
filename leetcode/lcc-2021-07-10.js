console.log(numDecodings("*") == 9);
console.log(numDecodings("1*") == 18);
console.log(numDecodings("2*") == 15);
console.log(numDecodings("*1") == 11);
console.log(numDecodings("*1*1*0") == 404);
function numDecodings(s) {
  const dp = Array(s.length + 1).fill(null);
  dp[0] = 1;
  if (s[0] == "0") return 0;

  dp[1] = s[0] == "*" ? 9 : 1;

  for (let i = 2; i <= s.length; i++) {
    const a = s[i - 2];
    const b = s[i - 1];

    if (b == "*") {
      dp[i] += dp[i - 1] * 9;
    } else if (b > "0") {
      dp[i] += dp[i - 1];
    }

    if (a == "*") {
      if (b == "*") {
        dp[i] += dp[i - 2] * 15;
      } else if (b <= "6") {
        dp[i] += dp[i - 2] * 2;
      } else {
        dp[i] += dp[i - 2];
      }
    } else if (a == "1" || a == "2") {
      if (b == "*") {
        if (a == "1") {
          dp[i] += dp[i - 2] * 9;
        } else {
          dp[i] += dp[i - 2] * 6;
        }
      } else {
        if ((a - "0") * 10 + (b - "0") <= 26) {
          dp[i] += dp[i - 2];
        }
      }
    }

    dp[i] %= 10 ** 9 + 7;
  }

  return dp[s.length];
}
