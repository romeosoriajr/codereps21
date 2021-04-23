function countBinarySubstrings(s) {

  var result = 0;
  var prevCount = 0;
  var currCount = 1;

  for (let i=1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      result += Math.min(prevCount, currCount);
      prevCount = currCount;
      currCount = 1;
    } else {
      currCount += 1;
    }
  }

  result += Math.min(prevCount, currCount);
  return result;

}

console.log(countBinarySubstrings("00110011"))
