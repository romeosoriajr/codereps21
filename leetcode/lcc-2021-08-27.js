function findLUSlength(strs) {
  strs.sort((a, b) => b.length - a.length);

  const dupes = getDupes(strs);

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    if (!dupes.has(str)) {
      if (i == 0) return str.length;

      for (let j = 0; j < i; j++) {
        if (isSubsequence(strs[j], str)) break;
        if (j == i - 1) return str.length;
      }
    }
  }

  return -1;

  function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
      if (str1[i] == str2[j]) j++;
      i++;
    }

    return j == str2.length;
  }

  function getDupes(strs) {
    const set = new Set();
    const dupes = new Set();

    for (let str of strs) {
      if (set.has(str)) {
        dupes.add(str);
      }
      set.add(str);
    }

    return dupes;
  }
}
