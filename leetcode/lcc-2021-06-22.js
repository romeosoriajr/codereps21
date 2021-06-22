function numMatchingSubseq(s, words) {
  let count = 0;

  for (const word of words) {

    let sIndex = -1;
    let wIndex = 0;

    while (wIndex < word.length) {
      sIndex = s.indexOf(word[wIndex], sIndex+1);
      if (sIndex == -1) break;
      wIndex += 1;
    }

    if (wIndex == word.length) count += 1;

  }

  return count;
}

const s = "dsahjpjauf";
const words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];

console.log(numMatchingSubseq(s, words));
