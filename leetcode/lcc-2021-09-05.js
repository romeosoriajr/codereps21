function orderlyQueue(s, k) {
  if (k > 1) {
    return s.split("").sort().join("");
  }

  let result = s;
  for (let i = 1; i < s.length; i++) {
    const temp = s.substr(i) + s.substr(0, i);
    if (temp < result) {
      result = temp;
    }
  }

  return result;
}
console.log(orderlyQueue("cba", 1));
