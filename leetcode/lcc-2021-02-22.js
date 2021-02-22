function findLongestWord (s, d) {

  const words = d.sort((a, b) => {
    return b.length - a.length || a.localeCompare(b);
  });
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    var word = words[i];

    var k = 0;
    for (let j=0; j < s.length; j++) {

      if (word[k] == s[j]) {
        k++;

        if (k == word.length) return word;
      }

    }
  }

  return ""

}

console.log(findLongestWord("bab",
["ba","ab","a","b"]))
