function minWindow(s, t) {
  let m = s.length;

  const map = {};
  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let count = t.length;
  let begin = 0;
  let minLength = Infinity;

  while (right < m) {

    // if letter found, subtract from count;
    if (map[s[right]] > 0) {
      count--;
    }

    map[s[right]]--;
    right++; //keep moving right pointer till all letters are found

    // all letters accounted for.. start trimming.
    while (count == 0) {
      if (right - left < minLength) {
        begin = left;
        minLength = right - left;
      }

      map[s[left]]++;

      if (map[s[left]] > 0) count++;
      left++;
    }
  }

  return minLength !== Infinity ? s.substr(begin, minLength) : '';
}
const s = "ADOBECODEBANC";
const t = "ABC";

console.log(minWindow(s, t));
