function addStrings (num1, num2) {
  let last1 = num1.length-1;
  let last2 = num2.length-1;
  let sum = 0;
  let carry = 0;
  let result = '';

  while (last1 >= 0 || last2 >= 0) {
    sum = carry;
    if (last1>=0) {
      sum += +num1[last1];
      last1 -= 1;
    }
    if (last2>=0) {
      sum += +num2[last2];
      last2 -= 1;
    }
    result = sum % 10 + result;
    carry = Math.floor(sum/10);
  }

  if (carry) result = carry + result;

  return result;
    
};
console.log(addStrings('1', '9'));
console.log(addStrings('11', '123'));
