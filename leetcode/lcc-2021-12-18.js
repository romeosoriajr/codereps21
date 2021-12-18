function atMostNGivenDigitSet(digits, n) {
  let result = 0;
  let nums = digits.length;
  let N = n.toString();
  let count = N.length - 1;

  helper(N);

  while (count) {
    result += Math.pow(nums, count);
    count--;
  }

  return result;
  function helper(N) {
    let len = N.length;
    if (!len) {
      result++;
      return;
    }

    let first = N.charAt(0);
    let m = digits.filter((x) => x < first).length;
    if (m) result += m * Math.pow(nums, len - 1);

    if (digits.includes(first)) helper(N.slice(1));
  }
}
