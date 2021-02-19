function minRemoveToMakeValid (str) {

  var s = str.split('');
  var openings = [];

  for (let i=0; i < s.length; i++) {

    if (s[i] == '(') {
      openings.push(i);
      console.log(openings);
    } else if (s[i] == ')'){

      if (!openings.length) {
        s[i] = '*';
      } else {
        openings.pop();
      }
    }
  }

  if (openings.length) {
    for (let i=0; i < openings.length; i++) {
      s[openings[i]] = '*'
    }
  }

  return s.filter(c => c != '*').join('')

}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
