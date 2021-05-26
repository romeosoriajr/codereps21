function minPartitions (n) {


  let max = 0;
  for (let digit of n) {
    max = Math.max(digit, max);
    if (max == 9) return 9;

  }

  return max;
}
