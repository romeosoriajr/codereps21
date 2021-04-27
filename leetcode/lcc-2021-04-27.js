function isPowerOfThreeLoop(num) {

  if (num) return false;
  let n = num;

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;

};

function isPowerOfThreeRecursion(num) {
  if (num <= 1) {
    return n === 1;
  }

  return num % 3 === 0 && isPowerOfThree(num/3);

};

function isPowerOfThree(num) {
  const largest = Math.pow(3, Math.floor(Math.log(Number.MAX_SAFE_INTEGER)/Math.log(3)))
  return num >= 1 && largest % 3 === 0;

}
