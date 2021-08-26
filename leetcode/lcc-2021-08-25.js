function judgeSquareSum(c) {
  let left = 0;
  let right = parseInt(Math.sqrt(c));

  while (left <= right) {
    const curr = left ** 2 + right ** 2;
    if (curr < c) {
      left++;
    } else if (curr > c) {
      right++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(judgeSquareSum(3));
console.log(judgeSquareSum(1));
