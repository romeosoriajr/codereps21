function nthMagicalNumber(n, a, b) {
  const mod = 10 ** 9 + 7;

  let left = Math.min(a, b);
  let right = n * Math.min(a, b);

  let c = a;
  let d = b;

  while (d > 0) {
    [c, d] = [d, c % d];
  }

  const lcm = (a * b) / c;

  while (left < right) {
    const m = Math.floor(left + (right - left) / 2);

    if (Math.floor(m / a) + Math.floor(m / b) - Math.floor(m / lcm) < n) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  return left % mod;
}

console.log(nthMagicalNumber(3, 6, 4));
