function addOperators(num, target) {
  const result = [];

  dfs(num, target, 0, 0, "");

  return result;

  function dfs(num, target, diff, subtotal, temp) {
    if (!num.length && subtotal == target) {
      result.push(temp);
      return;
    }

    for (let i = 1; i <= num.length; i++) {
      const curr = num.substr(0, i);
      if (curr.length > 1 && curr.charAt(0) == "0") return;

      const next = num.substr(i);
      const n = Number(curr);
      if (n > Number.MAX_VALUE) return;

      if (temp.length) {
        dfs(next, target, n, subtotal + n, `${temp}+${curr}`);
        dfs(next, target, -n, subtotal - n, `${temp}-${curr}`);
        dfs(
          next,
          target,
          diff * n,
          subtotal - diff + diff * n,
          `${temp}*${curr}`
        );
      } else {
        dfs(next, target, n, n, curr);
      }
    }
  }
}

const num = "123",
  target = 6;
console.log(addOperators(num, target));
