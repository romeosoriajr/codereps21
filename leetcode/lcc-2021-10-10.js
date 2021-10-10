function rangeBitwiseAnd (left, right) {

  if (left == 0) {
    return 0;
  }

  let factor = 1;

  while (left != right) {
    left >>= 1;
    right >>= 1;
    factor <<= 1;
  }

  return left * factor;

}

console.log(rangeBitwiseAnd(5, 7));
