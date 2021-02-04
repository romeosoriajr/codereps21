function findLHS (nums) {
  var dict = {}

  for (let num of nums) {
    if (!dict[num]) dict[num] = 0;
    dict[num] += 1;
  }

  var result = 0;

  for (let num of Object.keys(dict)) {
    let key = Number(num);
    if (dict[key+1]) {
      result = Math.max(result, dict[key+1] + dict[key]);
    }
  }

  return result;
}

console.log(findLHS([1,3,2,2,5,2,3,7]));
