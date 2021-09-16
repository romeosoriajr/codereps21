function maxTurbulenceSize(arr) {
  const dp = new Array(arr.length).fill(null).map(() => new Array(2).fill(1));

  let result = 1;

  for (let i = 1; i < arr.length; i++) {
    // if >, get the value from the opposing array
    if (arr[i] > arr[i - 1]) {
      dp[i][0] = dp[i - 1][1] + 1;
    } else if (arr[i] < arr[i - 1]) {
      dp[i][1] = dp[i - 1][0] + 1;
    }
    result = Math.max(result, ...dp[i]);
  }

  return result;
}
const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];
console.log(maxTurbulenceSize(arr));

