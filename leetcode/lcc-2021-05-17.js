function longestStrChain (words) {

  // key is word, value is bestLength
  const map = new Map();

  let best = 0;
  words.sort((a, b) => a.length - b.length);

  for (let word of words) {

    // iterate through every variation of the word missing one letter
    let currBest = 0;
    for (let i= 0; i < word.length; i++) {
      const pre = word.substr(0, i);
      const post = word.substr(i+1);
      const wordWithMissingLetter = `${pre}${post}`
      currBest = Math.max(currBest, (map.get(wordWithMissingLetter) || 0) + 1);
    }
    map.set(word, currBest);

    best = Math.max(best, map.get(word));

  }

  return best;
  
}

const words = ["xbc","pcxbcf","xb","cxbc","pcxbc"];
console.log(longestStrChain(words));
