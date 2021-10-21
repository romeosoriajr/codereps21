function reverseWords(s) {
  const words = s.split(/\s+/g).filter((v) => v != "");

  for (let i = 0; i < words.length / 2; i++) {
    [words[i], words[words.length - 1 - i]] = [
      words[words.length - 1 - i],
      words[i],
    ];
  }

  return words.join(" ");
}

const str = "  Bob    Loves  Alice   ";
console.log(reverseWords(str));
