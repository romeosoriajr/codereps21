function closeStrings (word1, word2) {

  if (word1.length !== word2.length) return false;

  var map1 = word1.split('').reduce((total, char) => {

    if (!total[char]) {
      total[char] = 1;
    } else {
      total[char] += 1;
    }
    return total;
  }, {})

  var map2 = word2.split('').reduce((total, char) => {

    if (!total[char]) {
      total[char] = 1;
    } else {
      total[char] += 1;
    }
    return total;
  }, {})


  var keys1 = Object.keys(map1);
  var keys2 = Object.keys(map2);

  if (keys1.length !== keys2.length) return false;


  for (let key of keys1) {

    if (!map2[key]) {
      return false;
    }
  }


  var count1 = Object.values(map1).sort((a, b) => a-b).join('');
  var count2 = Object.values(map2).sort((a, b) => a-b).join('');

  return count1 == count2

}

console.log(closeStrings("uau", "sxs"));
