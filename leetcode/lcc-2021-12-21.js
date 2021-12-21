function isPowerOfTwo(n) {
  return Math.log2(n) % 1 == 0;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
