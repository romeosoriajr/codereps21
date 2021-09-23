function breakPalindrome(palindrome) {
  const n = palindrome.length;

  const chars = palindrome.split("");

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (chars[i] !== "a") {
      chars[i] = "a";
      return chars.join("");
    }
  }

  chars[n - 1] = "b";

  return n - 1 < 2 ? "" : chars.join("");
}

