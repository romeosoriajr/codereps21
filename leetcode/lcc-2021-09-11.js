function calculate(s) {
  let result = 0;
  let sign = 1;
  const stack = [];
  const opStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") {
      continue;
    } else if (char === "+") {
      sign = 1;
    } else if (char === "-") {
      sign = -1;
    } else if (char >= "0" && char <= "9") {
      let num = char;
      while (
        i + 1 < s.length &&
        s[i+1] >= "0" &&
        s[i+1] <= "9"
      ) {
        num += s[i+1];
        i++;
      }
      result += sign * parseInt(num);
    } else if (char === "(") {
      stack.push(result);
      result = 0;
      opStack.push(sign);
      sign = 1;
    } else if (char === ")") {
      result = opStack.pop() * result + stack.pop();
      sign = 1;
    }
  }
  return result;
}

