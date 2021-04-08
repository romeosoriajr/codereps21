function letterCombinations (digits) {

  if (!digits || !digits.length) return [];

  var map = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ]

  var indexes = digits.split('').map((char) => Number(char) - 2);

  var result = [];

  dfs('', 0);

  return result;

  function dfs(currString, startIndex) {

    if (startIndex == indexes.length) {
      result.push(currString);
      return;
    }

    var letters = map[indexes[startIndex]];

    for (let j=0; j < letters.length; j++) {

      currString = currString.concat(letters[j]);
      dfs(currString, startIndex + 1);
      currString = currString.substring(0, currString.length-1);

    }

  }

}

console.log(letterCombinations(""))
