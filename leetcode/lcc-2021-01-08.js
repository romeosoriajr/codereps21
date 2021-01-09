function ladderLength(beginWord, endWord, wordList) {

  if (!wordList.includes(endWord)) return 0;

  const adjList = getAdjList([...wordList, beginWord]);

  return helper(beginWord, endWord, adjList);

  function getAdjList(wordList) {
    const adjList = wordList.reduce((list, word) => {
      list[word] = [];
      return list;
    }, {});

    for (let i=0; i < wordList.length; i++) {

      const currWord = wordList[i];
      for (let j=0; j < wordList.length; j++) {
        if (i==j) continue;

        const nextWord = wordList[j];
        let diff = 0;

        for (var k=0; k < nextWord.length && diff <= 1; k++) {
          if (currWord[k] != nextWord[k]) {
            diff++;
          }
        }

        if (diff == 1) {
          adjList[currWord].push(nextWord)
        }
      }
    }

    return adjList;
  }; //end getAdjList

  function helper(beginWord, endWord, adjList) {

    const queue = [beginWord];
    const visited = new Set();

    let level = 0;

    while (queue.length > 0) {
      let width = queue.length;
      level++;

      while (width-- > 0) {
        const word = queue.shift(0);

        if (endWord == word) {
          return level;
        }

        for (neighbor of adjList[word]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
    }

    return visited.has(endWord) ? level : 0;

  }

}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log","cog"];

// const wordList = ["hot","dot","dog","lot","log"];

console.log(ladderLength(beginWord, endWord, wordList));
