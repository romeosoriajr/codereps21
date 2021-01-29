function getSmallestString (n, k) {

  var result = new Array(n).fill(1);

  k -= n;

  while (k > 0) {
    result[--n] += Math.min(25, k);
    k -= Math.min(25, k);
  }

  return result
    .map((num) => String.fromCharCode(96+num))
    .join('');

}

var n = 5;
var k = 73;
console.log(getSmallestString(n, k))
