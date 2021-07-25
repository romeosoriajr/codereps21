function findIntegers(num) {
  let a = 1;
  let b = 2;

  let result = 0;
  num += 1;

  while (num) {
    if (num & 1 && num & 2) {
      result = 0;
    }
    result += a * (num & 1);
    num >>= 1;

    [a, b] = [b, a + b];
  }

  return result;
}
console.log(findIntegers(5));
