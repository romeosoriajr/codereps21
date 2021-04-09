function isAlienSorted (words, order) {
  var map = new Array(26).fill(null);

  for (let i=0; i < order.length; i++) {
    var offset = order.charCodeAt(i) - 'a'.charCodeAt(0);
    map[offset] = i;
  }

  for (let i=1; i < words.length; i++) {
    if (sorted(words[i-1], words[i]) > 0) return false;
  }

  return true;

  function sorted(word1, word2) {
    var l1 = word1.length;
    var l2 = word2.length;

    var min = Math.min(l1, l2);

    for (let i=0; i < min; i++) {
      var v1 = word1.charCodeAt(i) - 'a'.charCodeAt(0);
      var v2 = word2.charCodeAt(i) - 'a'.charCodeAt(0);

      if (v1 !== v2) {
        return map[v1] - map[v2];
      }
    }

    return l1 == min ? -1 : 1;
  }

}

console.log(isAlienSorted(["hello", "leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))
