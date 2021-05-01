class WordFilter {

  // store keys as a combination of prefix and suffix
  // to avoid querying the string at each call
  constructor(words) {

    this.map = new Map();

    for (let index=0; index < words.length; index++) {
      const word = words[index];
      for (let i=0; i <=10 && word.length; i++) {
        for (let j=0; j <=10 && word.length; j++) {
          const key = `${word.substr(0, i)}#${word.substr(word.length-j)}`
          this.map.set(key, index)
        }
      }
    }

  }

  f (prefix, suffix) {
    const key = `${prefix}#${suffix}`
    return this.map.has(key) ? this.map.get(key) : -1;
  }
}

const blah = new WordFilter(['apple']);
console.log(blah.f('a', 'e'));
