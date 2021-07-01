function grayCode (n) {
  if (n === 0) return [0];
  const result = grayCode(n-1);
  const mask = 1 << n - 1;
  let i = result.length-1;
  while (i >= 0) {
    result.push(result[i] | mask)
    i -= 1;
  }

  return result;
}
