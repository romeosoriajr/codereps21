function findLadders(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];

  const input = [...wordList];

  if (!wordList.includes(beginWord)) {
    input.push(beginWord);
  }

  const list = buildAdjacency(input);
  return getPaths(beginWord, endWord, list);
  function buildAdjacency(wordList) {
    const list = {};

    for (word of wordList) {
      const n = word.length;
      list[word] = new Set();

      for (let i = 0; i < n; i++) {
        const chars = word.split("");
        chars[i] = ".";
        const pattern = chars.join("");

        const regex = new RegExp(pattern);
        const neighbors = wordList.filter((w) => w !== word && regex.test(w));

        if (neighbors.length) {
          for (let neighbor of neighbors) {
            list[word].add(neighbor);
          }
        }
      }
    }

    return list;
  }

  function getPaths(beginWord, endWord, list) {
    const result = [];
    const queue = [[beginWord]];
    const visited = new Set();

    while (queue.length) {
      const q = queue.length;

      for (let i = 0; i < q; i++) {
        const currPath = queue.shift();
        const last = currPath[currPath.length - 1];
        visited.add(last);

        // if the last word in path is the end word, add to result
        if (last === endWord) {
          result.push(currPath);
          continue;
        }

        //else chain the next word in path for next loop
        for (const key of list[last].keys()) {
          if (visited.has(key)) continue;
          queue.push([...currPath, key]);
        }
      }

      if (result.length) return result;
    }

    return [];
  }
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(findLadders(beginWord, endWord, wordList));
