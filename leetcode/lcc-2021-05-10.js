function countPrimes (n) {

  if (!n) return 0;

  const prime = Array(n).fill(true);

  for (let i=2; i*i < n; i++) {
    if (prime[i]) {
      for (let j=i*i; j < n; j += i) {
        prime[j] = false;
      }
    }
  }

  let total = 0;
  for (let i=2; i < n; i++) {
    if (prime[i]) total++;
  }

  return total;

}

console.log(countPrimes(10));
