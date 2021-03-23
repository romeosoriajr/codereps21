function threeSumMulti (arr, target) {
  var map = new Map();

  var result = 0;
  var mod = 1000000007;

  for (let i=0; i < arr.length; i++) {
    var result = (result + (map.get(target-arr[i]) || 0)) % mod;

    for (let j=0; j < i; j++) {
      var temp = arr[i] + arr[j];
      map.set(temp, ((map.get(temp) || 0) + 1))
    }
  }

  return result;
}

console.log(threeSumMulti([1,1,2,2,2,2], 5));
