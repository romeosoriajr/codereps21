function evalRPN (tokens) {
  const stack = [];
  const operate = operateOnStack(stack);

  for (let token of tokens) {
    stack.push(/\d/.test(token) ? Number(token) : operate(token));
  }

  return stack.pop()

  function operateOnStack(stack) {
    return function operate(operand) {
      const num1 = stack.pop();
      const num2 = stack.pop();

      switch(operand) {
        case('+'):
          return num2+num1;
        case('-'):
          return num2-num1;
        case('*'):
          return num2*num1;
        case('/'):
          return Math.trunc(num2/num1);
      }

    }
  }
}

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] 
const tokens1 = ["4", "13", "5", "/", "+"]
console.log(evalRPN(tokens1));
