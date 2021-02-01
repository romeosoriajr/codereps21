function hammingWeight (n) {
  return n.toString(2).split('0').join('').length;
}
