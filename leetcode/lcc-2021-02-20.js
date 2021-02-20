function romanToInt(s) {

  var map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  var result = 0;

  for (let i=s.length-1; i >= 0; i--) {
    var char = s[i];

    if (char == 'I' && (s[i+1] == 'V' || s[i+1] == 'X')) {
      result -= map.get(char);
    } else if (char == 'X' && (s[i+1] == 'L' || s[i+1] == 'C')) {
      result -= map.get(char);
    } else if (char == 'C' && (s[i+1] == 'D' || s[i+1] == 'M')) {
        result -= map.get(char);
    } else {
      result += map.get(char);
    }
  }

  return result;
}

console.log(romanToInt('IX'))
