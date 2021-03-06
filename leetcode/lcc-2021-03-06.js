function minimumLengthEncoding (words) {
  const set = new Set(words);

  words.forEach(word => {

    for (let i=1; i < word.length; i++) {
      const suffix = word.slice(i);
      set.delete(suffix);
    }
  })

  return [...set].reduce((sum, word) => sum += word.length+1, 0)
}

// TLE
function minimumLengthEncodingNaive (words) {

  var result = Infinity;

  helper(words, new Set(), [])

  return result;

  function helper (words, visited, current) {

    if (words.length == visited.size) {
      console.log(current);
      var length = current.join('').length + current.length
      result = Math.min(result, length)
      return;
    }
    for (let i=0; i < words.length; i++) {

      if (visited.has(i)) continue;

      visited.add(i);

      let pushed = false;
      const lastWord = current[current.length-1];
      if (!containsWord(lastWord, words[i])) {
        pushed = true;
        current.push(words[i])
      }
      
      helper(words, visited, current);

      if (pushed) {
        current.pop();
      }

      visited.delete(i);

    }

  }

}

function containsWord(main, sub) {
  if (!main || !sub || (main.length < sub.length)) {
    return false;
  }

  let i=1;
  while (sub.length-i >= 0 &&
          (sub[sub.length-i] == main[main.length-i])) {
      i++;
  }

  return sub.length - i == -1;

}



const words = ["time", "atime", "btime"];

console.log(minimumLengthEncoding(words))
