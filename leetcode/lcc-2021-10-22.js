function frequencySort(s) {
  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s.charAt(i)] = count[s.charAt(i)] + 1 || 1;
  }

  return Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .reduce((str, char) => (str += char.repeat(count[char])), "");
}

console.log(frequencySort("tree"));
