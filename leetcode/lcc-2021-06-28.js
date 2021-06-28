function removeDuplicates(s) {

  const chars = s.split('');
  const stack = [];

  for (let i=0; i < chars.length; i++) {

    if (chars[i] == stack[stack.length-1]) {
      stack.pop();
    } else {
      stack.push(chars[i]);
    }
  }

  return stack.join('');


}

console.log(removeDuplicates("azxxzy"));
