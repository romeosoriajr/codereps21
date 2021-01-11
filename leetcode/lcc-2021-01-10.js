// Fenwick tree
function createSortedArray (instructions) {
  var res = 0;
  var maxVal = Math.max(...instructions);
  var c = new Array(maxVal+1).fill(0);

  for (let index in instructions) {
    var currInstruct = instructions[index];
    res += Math.min(get(currInstruct-1), index - get(currInstruct));

    while (currInstruct <= maxVal) {
      c[currInstruct] += 1;
      currInstruct += currInstruct & -currInstruct;
    }
  }

  function get(num) {
    var res = 0;
    while (num > 0) {
      res += c[num];
      num -= num & -num;
    }
    return res;
  }

  return res % (Math.pow(10, 9) + 7);

}

console.log(createSortedArray([1,3,3,3,2,4,2,1,2]))
