function spellchecker (wordlist, queries) {

  var set = new Set(wordlist);
  var uppercase = new Map();
  var vowels = new Map();

  for (word of wordlist) {
    var l = word.toUpperCase();
    if (!uppercase.has(l)) uppercase.set(l, word);

    var v = word.toLowerCase().replace(/[aeiou]/gi, '#')
    if (!vowels.has(v)) vowels.set(v, word)
  }

  return queries.map(query => {

    if (set.has(query)) return query;

    var l = query.toLowerCase();
    if (uppercase.has(l)) return uppercase.get(l)

    var v = query.toLowerCase().replace(/[aeiou]/gi, '#')
    if(vowels.has(v)) return vowels.get(v)

    return '';
    
  })
}

const wordlist = ['KiTe', 'kite', 'hare', 'Hare'];
const queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]

console.log(spellchecker(wordlist, queries))
