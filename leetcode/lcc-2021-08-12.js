function groupAnagrams(strs) {
  const map = {};
  for (let word of strs) {
    const key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  const result = [];

  for (let key of Object.keys(map)) {
    result.push(map[key]);
  }

  return result;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
