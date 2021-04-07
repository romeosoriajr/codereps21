function halvesAreAlike (s) {

  var l = s.length;
  var vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  var count = 0;

  for (let i=0; i < l/2; i++) {
    var j=l-i-1;
    if (vowels.has(s[i])) {
      count ++;
    }

    if (vowels.has(s[j])) {
      count --;
    }

  }

  return count == 0;
}

console.log(halvesAreAlike("AbCdEfGh"));
