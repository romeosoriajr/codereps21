function longestDupSubstring(str) {
  const n = str.length;
  let result = "";
  const chars = new Map();

  for (let i = 0; i < n; i++) {
    const c = str.charAt(i);
    if (chars.has(c)) {
      chars.get(c).push(i);
    } else {
      chars.set(c, [i]);
    }
  }

  for (let indices of chars.values()) {
    if (indices.length == 1) continue;

    for (let i=0; i < indices.length; i++) {
      const index = indices[i];
      if (result.length >= n - index) break;

      for (let j = i + 1; j < indices.length; j++) {
        if (result.length >= n - indices[j]) break;

        let count = findDupe(index, indices[j]);
        if (result.length < count) {
          result = str.substring(index, index + count);
        }
      }
    };
  }

  return result;

  function findDupe(a, b) {
    let count = 0;
    while (a < n && b < n && str.charAt(a) == str.charAt(b)) {
      count++;
      a++;
      b++;
    }

    return count;
  }
}
