function beautifulArray(n) {
  let result = [];
  result.push(1);
  while (result.length < n) {
    const temp = [];
    for (let i of result) if (i * 2 - 1 <= n) temp.push(i * 2 - 1);
    for (let i of result) if (i * 2 <= n) temp.push(i * 2);

    result = temp;
  }

  return result;
}

console.log(beautifulArray(4));
