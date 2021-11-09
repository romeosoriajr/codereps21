function findNumOfValidWords(words, puzzles) {
  const offset = "a".charCodeAt();
  const wordBits = [];

  for (let i=0; i < words.length; i++) {
    const word = words[i];
    const uniques = new Set(word.split(""));

    // if uniques exceed puzzle length, skip.
    if (uniques.size > 7) continue;
    let bit = 0;

    for (let char of uniques) {
      bit |= 1 << (char.charCodeAt() - offset);
    }

    wordBits.push(bit);
  };

  const memo = {};

  return puzzles.map((puzzle) => {
    let count = 0;
    let firstBit = 0;
    firstBit |= 1 << (puzzle.charCodeAt(0) - offset);

    let currBit = 0;
    for (let i = 0; i < puzzle.length; i++) {
      currBit |= 1 << (puzzle.charCodeAt(i) - offset);
    }

    const key = [puzzle[0], currBit].join(",");

    if (memo[key]) {
      return memo[key];
    } else {
      wordBits.forEach((wordBit) => {
        if ((wordBit & firstBit) == firstBit && (currBit & wordBit) == wordBit) {
          count++;
        }
      });

      memo[key] = count;
      return count;
    }
  });
}

const words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"];
const puzzles = [
  "aboveyz",
  "abrodyz",
  "abslute",
  "absoryz",
  "actresz",
  "gaswxyz",
];

console.log(findNumOfValidWords(words, puzzles));
