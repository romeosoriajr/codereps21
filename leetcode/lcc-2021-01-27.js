function concatenatedBinary (num) {
  var modulo = (10**9)+ 7;
  var result = 0;
  var length = 1;

  for (let i=1; i <= num; i++) {

    for (let j=0; j < length; j++) {
      result = (result << 1) % modulo;
    }

    result = (result + i) % modulo;

    if (((i+1) & i) == 0) length++;

  }

  return result;
}

console.log(concatenatedBinary(12));
