function hasAllCodes(s, k) {
  
  var uniques = new Set();

  for (let i=0; i < s.length-k+1; ++i) {
    var code = s.substr(i, k);
    uniques.add(code);
  }

  return uniques.size == (2**k);

}

console.log(hasAllCodes("0000000001011100", 4));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("00110110", 2));
