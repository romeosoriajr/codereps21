function checkInclusion(s1, s2) {
  const chars = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i);
    chars[char] = (chars[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  while (right < s2.length) {
    const rightChar = s2.charAt(right);
    const leftChar = s2.charAt(left);

    if (chars[rightChar] > 0) {
      chars[rightChar]--;
      right++;

      if (right - left == s1.length) {
        return true;
      }
    } else if (left == right) {
      left++;
      right++;
    } else {
      chars[leftChar]++;
      left++;
    }
  }

  return false;
}

const s1 = "ab",
  s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));
