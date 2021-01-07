// sliding window. get length from start to curr index
// move startindex if it has been seen before
function lengthOfLongestSubstring (s) {

  var maxLength = 0;

  var dict = new Map();

  var startIndex = -1;
  for (let i=0; i < s.length; i++) {

    const charCode = s.charCodeAt(i);

    if (dict.has(charCode)) {
      startIndex = Math.max(startIndex, dict.get(charCode));
    }

    dict.set(charCode, i);
    maxLength = Math.max(maxLength, i-startIndex);

  }

  return maxLength;

}

console.log(lengthOfLongestSubstring("pwwkew"))
