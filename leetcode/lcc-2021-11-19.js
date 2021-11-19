function hammingDistance(x, y) {
  let xor = x^y;
  let count = 0;

  while (xor > 0) {
    if (xor & 1) {
      count++;
    }

    xor /= 2;
  }

  return count;
}

console.log(hammingDistance(3, 1));
