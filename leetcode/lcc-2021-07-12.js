function isIsomorphic(s, n) {
  if (s.length !== n.length) return false;

  const mapS = new Map();
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charN = n[i];

    if (!mapS.has(charS) && !seen.has(charN)) {
      mapS.set(charS, charN);
      seen.add(charN)
    } else {
      if (mapS.get(charS) !== charN) {
        return false;
      }
    }
  }

  return true;
}

function test(fn, array, result) {

  const response = fn(...array)

  if (response !== result) {
    return `[${array.join(', ')}] should be ${result}, but got ${response}`
  } else {
    return 'PASS'
  }
}

console.log(test(isIsomorphic, ["egg", "add"], true));
console.log(test(isIsomorphic, ["foo", "bar"], false));
console.log(test(isIsomorphic, ["paper", "title"], true));
