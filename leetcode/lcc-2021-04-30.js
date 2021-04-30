function powerfulIntegers(x, y, bound) {

  var result = new Set();

  for (let i=1; i <= bound; i *= x) {
    for (let j=1; i+j <= bound; j *= y) {
      result.add(i+j);
      if (y==1) break;
    }
    if (x==1) break;
  }

  return Array.from(result);

}

