function shortestToChar (s, c) {

  var cArr = [];
  var result = [];

  //get all locations of c
  for (let i=0; i < s.length; i++) {
    if (s[i] == c) {
      cArr.push(i);
    }
  }

  for (let i=0; i < s.length; i++) {
    if (s[i] == c) {
      result.push(0);
    } else {

      //calculate all distances
      var distances = cArr.map(num => Math.abs(num-i));
      result.push(Math.min(...distances));
    }
  }

  return result;

}

console.log(shortestToChar('aaab', 'b'))
