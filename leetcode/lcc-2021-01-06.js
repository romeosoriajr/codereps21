function findKthPositive (arr, k) {

  var curr = 0;
  var i = 0;

  do {

    curr++;

    if (arr[i] == curr) {
      i++;
    } else {
      k--;
    }

  } while (k)

  return curr;
}

var arr = [1,2,3,4];
var k = 2;

console.log(findKthPositive(arr, k))
