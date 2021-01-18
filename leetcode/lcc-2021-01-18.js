function maxOperations(nums, k) {
  var map = new Map();
  var result = 0;

  for (let num of nums) {

    let diff = k - num;

    if (map.get(diff)) {
      map.set(diff, map.get(diff) - 1);
      result++;
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }

  }

  return result;

}

console.log(maxOperations([3,1,3,4,6], 6))
