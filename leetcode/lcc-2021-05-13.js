function ambiguousCoordinates (s) {
  const strip = /[\,*\.*\s\(\)]*/g;
  const str = s.replace(strip, '');

  const arr = [];

  for (let i=1; i < str.length; i++) {
    const strA = str.substr(0, i);
    const strB = str.substr(i);

    const vA = getVariations(strA);
    const vB = getVariations(strB);

    if (vA.size && vB.size) {
      for (let a of vA) {
        for (let b of vB) {
          arr.push(`(${a}, ${b})`);
        }
      }
    }
  }

  return arr

  function getVariations(str) {
    const set = new Set();
    if (String(Number(str)).length === str.length) {
      set.add(Number(str));
    }

    if (str.length === 1) return set;

    for (let i=1; i < str.length; i++) {
      const pre = str.substr(0,i);
      const post = str.substr(i);
      let x = Number(`${pre}.${post}`);

      if (String(x).length === (str.length+1)) {
        set.add(x);
      }
    }

    return set;
  }

}

console.log(ambiguousCoordinates("(123)"))
console.log(ambiguousCoordinates("(00011)"))
