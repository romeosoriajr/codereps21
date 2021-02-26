function validateStackSequences(pushed, popped) {

  var stack = [];

  for (const pushedVal of pushed) {
    stack.push(pushedVal);

    while (stack.length && stack[stack.length-1] == popped[0]) {
      stack.pop();
      popped.shift();
    }
  }

  return !stack.length

}
function validateStackSequencesOrig (pushed, popped) {

  var stack = [];

  while (pushed.length) {
    if (!stack.length) {
      var nextPushVal = pushed.shift();
      stack.push(nextPushVal);
    } else {
      var peek = stack[stack.length-1];
      
      if (peek == popped[0]) {
        stack.pop();
        popped.shift();
      } else {
        var nextPushVal = pushed.shift();
        stack.push(nextPushVal);
      }
    }
  }

  while (popped.length && stack.length) {
    if (popped.shift() !== stack.pop()) {
      return false
    }
  }

  return !popped.length && !stack.length;

}

var pushed = [1,2,3,4,5]
var popped = [4,5,3,2,1]
console.log(validateStackSequences(pushed, popped))
