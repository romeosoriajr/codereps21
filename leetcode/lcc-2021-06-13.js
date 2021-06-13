function palindromePairs (words) {

  const indices = [];

  for (let i=0; i < words.length; i++) {
    for (let j=0; j < words.length; j++) {
      if (i==j) continue;
      if (isPalindrome(words[i], words[j])) {
        indices.push([i,j]);
      }
    }
  }

  return indices

  function isPalindrome(wordA, wordB) {

    const word = `${wordA}${wordB}`

    let left = 0; 
    let right = word.length-1;

    while (left < right) {

      if (word[left] !== word[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;

  }
}

const words = ["bat","tab","cat"];
console.log(palindromePairs(words));

