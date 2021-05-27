function maxProduct (words) {

  const l = words.map(w => new Set(w.split('')))

  let result = 0;
  for (let i=0; i < words.length; i++) {

    for (let j=0; j < words.length; j++) {
      if (i==j) continue;

     if (l[i].size + l[j].size == new Set([...l[i].values(), ...l[j].values()]).size) {

      result = Math.max(words[i].length*words[j].length, result);
     }

    }
  }

  return result;

}

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))
