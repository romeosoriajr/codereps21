function maxPower(s) {
  let result = 1;
  let curr = 1;

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) == s.charCodeAt(i - 1)) {
      curr++;
      result = Math.max(result, curr);
    } else {
      curr = 1;
    }
  }

  return result;
}
