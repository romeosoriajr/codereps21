function complexNumberMultiply(num1, num2) {

  let [r1, i1] = num1.replace('i', '').split('+').map(x => parseInt(x));
  let [r2, i2] = num2.replace('i', '').split('+').map(x => parseInt(x));

  const r1r2 = r1*r2;
  const i1i2 = i1*i2;
  const r1i2r2i1 = (r1*i2)+(r2*i1);

  const aResult = `${(r1r2 + (-1 * i1i2))}`
  const bResult = `${r1i2r2i1}i`
  return `${aResult}+${bResult}`
}

const num1 = "1+-1i", num2 = "1+-1i"
console.log(complexNumberMultiply(num1, num2))
