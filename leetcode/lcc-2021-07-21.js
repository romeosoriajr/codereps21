function pushDominoes(dominoes) {
  let d = `L${dominoes}R`;
  let result = "";

  let i = 0;
  for (let j = 1; j < d.length; ++j) {
    if (d[j] == ".") continue;
    const middle = j - i - 1;
    if (i > 0) result += d[i];
    if (d[i] == d[j]) {
      result += d[i].repeat(middle);
    } else if (d[i] == 'L' && d[j] == 'R') {
      result += '.'.repeat(middle);
    } else {
      result += 'R'.repeat(middle/2) + '.'.repeat(middle%2) + 'L'.repeat(middle/2)
    }
    i=j;
  }

  return result;
}
const dominoes = "RR.L";
console.log(pushDominoes(dominoes));
