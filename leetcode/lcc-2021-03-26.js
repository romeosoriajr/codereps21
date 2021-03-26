function wordSubsets (A, B) {

  var charMap = new Map();

  for (b of B) {
    const map = countLetters(b);
    for (char of map.keys()) {
      var currCount = charMap.get(char) || 0;
      charMap.set(char, Math.max(currCount, map.get(char)));
    }
  }


  return A.filter(a => {
    const map = countLetters(a);
    for (char of charMap.keys()) {
      if (!map.get(char) || map.get(char) < charMap.get(char)) {
        return false;
      }
    }
    return true;
  })


  function countLetters (word) {
    return word.split('').reduce((map, letter) => {
      map.set(letter, (map.get(letter) || 0) + 1);
      return map
    }, new Map());

  }
}

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e" ,"o"]))
