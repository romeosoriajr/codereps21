function removeDuplicates(s, k) {

  var strArr = s.split('');
  var stack = [];

  for (let i=0; i < strArr.length; i++) {
    var char = strArr[i];

    if (!stack.length || stack[stack.length-1][0] !== char) {
      stack.push([char, 1])
    } else if (stack[stack.length-1][0] == char) {
      stack[stack.length-1][1] += 1;
    }

    if (stack[stack.length-1][1] == k) {
      stack.pop();
    }
  }

  var result = '';

  for (let i=0; i < stack.length; i++) {
    result += stack[i][0].repeat(stack[i][1]);
  }

  return result;

}

function removeDuplicatesRegExp (s, k) {

  var regex = new RegExp(`(.)\\1{${k-1}}`)
  var result = s;
  
  do {
    s = result;
    result = s.replace(regex, '');

  } while (result !== s);

  return result;

}

console.log(removeDuplicates("deeedbbcccbdaa", 3))
