function multiply(num1, num2) {
  const m = num1.length;
  const n = num2.length;

  const products = new Array(m + n).fill(null);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const digit1 = num1.charAt(i) - 0;
      const digit2 = num2.charAt(j) - 0;

      products[i + j + 1] += digit1 * digit2;
    }
  }

  let carry = 0;
  for (let i = products.length - 1; i >= 0; i--) {
    const temp = (products[i] + carry) % 10;
    carry = Math.floor((products[i] + carry) / 10);
    products[i] = temp;
  }

  let trim = 0;

  while (products[trim] == 0) {
    trim++;
  }

  const result = products.slice(trim).join("");

  return result.length ? result : "0";
}

console.log(multiply("123", "456"));
