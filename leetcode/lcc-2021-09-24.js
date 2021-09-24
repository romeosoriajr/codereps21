function tribonacci(n) {
  const arr = [0, 1, 1];

  if (n < 3) return arr[n];

  let count = 3;
  sum = arr.reduce((total, num) => total + num, 0);

  while (count < n) {
    count++;
    const prev = arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = sum;
    sum -= prev;
    sum += arr[2];
  }

  return sum;
}

console.log(tribonacci(25));
