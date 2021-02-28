function divid(dividend, divisor) {
  if (divisor === 0 || dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var sign = (dividend > 0 !== divisor > 0) ? -1 : 1;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  return result * sign;
};

console.log(divide(0,1))
