function minCut(s) {
  if (!s) return 0;
  const n = s.length;

  const cuts = new Array(n).fill(null);

  const isPalindrome = new Array(n).fill(null).map(() => new Array(n).fill());

  for (let r = 0; r < n; r++) {
    cuts[r] = r;
    isPalindrome[r][r] = true;
    for (let l = 0; l <= r; l++) {
      if (s[l] == s[r] && (r - l <= 1 || isPalindrome[l + 1][r - 1])) {
        if (!l) {
          cuts[r] = 0;
        } else {
          isPalindrome[l][r] = true;
          cuts[r] = Math.min(cuts[l - 1] + 1, cuts[r]);
        }
      }
    }
  }

  return cuts[n - 1];
}

const s = "aab";
console.log(minCut(s));
