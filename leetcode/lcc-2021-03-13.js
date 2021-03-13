function numFactoredBinaryTrees (arr) {

  arr.sort((a,b) => a-b);

  var map = new Map();

  var count = 1;

  map.set(arr[0], count);

  for (let i=1; i < arr.length; i++) {
    var num = arr[i];
    count = 1;

    for (key of map.keys()) {
      if (num % key == 0 && map.has(num/key)) {
        count += map.get(key) * map.get(num/key);
      }
    }

    map.set(num, count);
  }

  var sum = 0;
  for (key of map.keys()) {
    sum = (sum + map.get(key)) % (Math.pow(10,9) + 7);
  }

  return sum;

}

console.log(numFactoredBinaryTrees([2,4,5,10]))
