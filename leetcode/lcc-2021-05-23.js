// TLEs
function shortestSuperstring (words) {

  const n = words.length;
  const visited = Array(n).fill(false);
  let bestString = words.join('');

  helper(visited, '', 0);

  function helper (visited, currString, count) {
    if (count == n) {
      if (currString.length < bestString.length) {
        bestString = currString;
      }
      return;
    }

    for (let i=0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      const superString = getSuperString(currString, words[i]);
      helper(visited, superString, count+1);
      visited[i] = false;
    }
  }

  return bestString;


  function getSuperString(currString, word) {

    const overlapLength = Math.min(currString.length, word.length);

    let offset = 0;
    while (offset < overlapLength) {
      const sub = word.substr(0, overlapLength-offset);
      const currStringEnd = currString.substr(currString.length-overlapLength+offset);

      if (sub == currStringEnd) break;
      offset += 1;
    }

    const tack = word.substr(overlapLength-offset);

    return currString + tack;

  }


}

//console.log(getSuperString("", "loves"))
console.log(shortestSuperstring(["alex", "loves", "leetcode"]))
