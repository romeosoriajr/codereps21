function countVowelStrings (n) {

  return helper(0, n);

  function helper (start, k) {
    if (!k) {
      return 1;
    }

    var total = 0;
    for (let i=start; i < 5; i++) {
      total += helper(i, k-1);
    }

    return total;

  }

}

console.log(countVowelStrings(33));
