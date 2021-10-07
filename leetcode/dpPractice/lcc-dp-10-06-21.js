const { performance } = require("perf_hooks");
function fibRecursive(num) {
  if (num <= 1) return num;

  return fibRecursive(num - 2) + fibRecursive(num - 1);
}

function fibMemo(num) {
  const memo = new Map();

  return helper(num);

  function helper(num) {
    if (memo.has(num)) return memo.get(num);

    if (num <= 1) {
      memo.set(num, num);
    } else {
      memo.set(num, helper(num - 2) + helper(num - 1));
    }

    return memo.get(num);
  }
}

function fibTopDown(num) {
  if (num <= 1) return num;

  const dp = [0, 1];

  for (let i = 2; i <= num; i++) {
    const sum = dp[0] + dp[1];

    dp[i % 2] = sum;
  }

  return dp[num % 2];
}

function tribTopDown(num) {
  const dp = [0, 1, 1];
  if (num <= 2) return dp[num];

  for (let i = 3; i <= num; i++) {
    const sum = dp[0] + dp[1] + dp[2];

    dp[i % 3] = sum;
  }

  return dp[num % 3];
}


