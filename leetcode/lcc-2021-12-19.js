function decodeString(s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let subStr = "";

      while (stack[stack.length - 1] !== "[") {
        subStr += stack.pop();
      }

      stack.pop();

      let k = 0;
      let base = 1;

      while (stack.length && /\d/.test(stack[stack.length - 1])) {
        k = parseInt(stack.pop()) * base + k;
        base *= 10;
      }

      while (k--) {
        for (let i = subStr.length - 1; i >= 0; i--) {
          stack.push(subStr.charAt(i));
        }
      }
    }
  }

  return stack.join("");
}

const s = "3[a2[c]]";
//const s = "3[a]2[bc]";

console.log(decodeString(s));
