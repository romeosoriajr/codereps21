function findAndReplacePattern(words, pattern) {

  const result = [];

  for (let word of words) {

    var map = new Map();
    var seen = new Set();
    for (var i=0; i < word.length; i++) {
      const p = pattern[i];
      const char = word[i];

      if (!map.has(p) && !seen.has(char)) {
        map.set(p, char);
        seen.add(char);
      } else {
        if (map.get(p) !== char) break;
      }
    }

    if (i==pattern.length) result.push(word);

  }

  return result;
}
const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
const pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
