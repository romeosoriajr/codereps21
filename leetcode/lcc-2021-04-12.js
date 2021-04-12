function constructArray(n, k) {

  var result = [];
  
  var i=1;
  var j=n;

  while (i <= j) {
    if (k > 1) {
      result.push( k-- % 2 ? i++ : j--);
    } else {
      result.push(i++);
    }
  }

  return result;

}
console.log(constructArray(3, 2));
