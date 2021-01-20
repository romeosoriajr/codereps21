function isValid(s) {

  var map = new Map();
  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");

  var stack = [];

  for (let char of s) {

    // if its an opening, push a closing bracket
    // onto stack
    if (map.has(char)) {
      stack.push(map.get(char));

    } else {
      // implies char is a closing bracket

      // if stack is empty, its invalid
      if (!stack.length) {
        return false;
      }

      // if the closing pair doesnt match
      // its invalid
      const last = stack.pop();

      if (last !== char) {
        return false;
      }
    }
  }

  return !stack.length

}

const s = "()[]{}";

console.log(isValid(s));
