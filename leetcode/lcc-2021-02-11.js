function isAnagram(s, t) {

  if (s.length !== t.length) return false;

  var dict = {}

  for (let i=0; i < s.length; i++) {

    if (!dict[s[i]]) {
      dict[s[i]] = 0;
    }

    dict[s[i]] += 1;
  }

  for (let i=0; i < t.length; i++) {
    if (!dict[t[i]]) return false;

    dict[t[i]] -= 1;

    if (!dict[t[i]]) delete dict[t[i]];
  }

  return true;

}
