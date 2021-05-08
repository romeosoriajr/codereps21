// instead of iterating through the range and testing if it is a palindrome
// create a set of palindromes from smaller ones.
function superpalindromesInRange(left, right) {

  let total = 0;

  const palindromes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i=1; i < 10000; i++) {
    const left = String(i);
    const right = left.split("").reverse().join("");
    palindromes.push(BigInt(left+right));

    for(let d=0; d < 10; d++) {
      palindromes.push(BigInt(`${left}${d}${right}`))
    }
  }

  for (let p of palindromes) {
    const sq = p*p;

    if (!isPalindrome(sq)) continue;
    if (BigInt(left) <= sq && sq <= BigInt(right)) {
      total++;
    }
  }

  return total;

  function isPalindrome(num) {
    const str = num.toString();
    for (let i=0; i < str.length/2; i++) {
      if (str[i] != str[str.length-i-1]) {
        return false;
      }
    }
    return true;
  }

}


console.log(superpalindromesInRange("40000000000000000",
"50000000000000000"))

