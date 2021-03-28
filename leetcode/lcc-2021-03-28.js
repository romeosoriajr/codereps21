function originalDigits (s) {
  var chars = s.split('');
  var count = new Array(10).fill(0);


  for (char of chars) {
    switch(char) {
      case 'z':
        count[0]++;
        break;
      case 'w':
        count[2]++;
        break;
      case 'u':
        count[4]++;
        break;
      case 'x':
        count[6]++;
        break;
      case 'g':
        count[8]++;
        break;
      case 's':
        count[7]++;
        break;
      case 'f':
        count[5]++;
        break;
      case 'o':
        count[1]++;
        break;
      case 't':
        count[3]++;
        break;
      case 'i':
        count[9]++;
        break;
    }
  }

  // filter out common letters
  count[7] = count[7] - count[6];
  count[5] = count[5] - count[4];
  count[1] = count[1] - count[0] - count[2] - count[4];
  count[3] = count[3] - count[2] - count[8];
  count[9] = count[9] - count[5] - count[6] - count[8];

  var result = '';

  for (let i=0; i < 10; i++) {
    for (let j=0; j < count[i]; j++) {
      result = `${result}${i}`
    }
  }

  return result;

}

console.log(originalDigits("fviefuro"));
