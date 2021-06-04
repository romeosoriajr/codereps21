function openLock(deadends, target) {
  const queue = [];
  const visited = new Set(deadends);

  if (visited.has("0000")) return -1;
  queue.push("0000");

  let turns = 0;

  while (queue.length) {
    let items = queue.length;

    while (items) {
      const code = queue.shift();

      if (code == target) {
        return turns;
      }

      // add variations to queue;
      for (let i = 0; i < code.length; i++) {
        const currDigit = Number(code[i]);
        const codeArr = code.split("");

        const upDigit = currDigit + 1 > 9 ? 0 : currDigit + 1;
        codeArr.splice(i, 1, String(upDigit));
        const upCode = codeArr.join("");

        if (!visited.has(upCode)) {
          queue.push(upCode);
          visited.add(upCode);
        }

        const downDigit = currDigit - 1 < 0 ? 9 : currDigit - 1;
        codeArr.splice(i, 1, String(downDigit));
        const downCode = codeArr.join("");

        if (!visited.has(downCode)) {
          queue.push(downCode);
          visited.add(downCode);
        }
      }

      items--;
    }

    turns++;
  }

  return -1;
}

const deadends = ["0000"];
const target = "8888";

console.log(openLock(deadends, target));
