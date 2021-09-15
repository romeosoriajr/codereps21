function reverseOnlyLetters(s) {
  const arr = s.split("");

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (isLetter(arr[l]) && isLetter(arr[r])) {
      [arr[l++], arr[r--]] = [arr[r], arr[l]];
    }

    while (!isLetter(arr[l])) l++;
    while (!isLetter(arr[r])) r--;
  }
  return arr.join("");

  function isLetter(char) {
    return /[A-Za-z]/.test(char);
  }
}

const s = "?6C40E";
console.log(reverseOnlyLetters(s) == "?6E40C");
