class StreamChecker {
  constructor(words) {
    this.trie = new Trie();

    for (let word of words) {
      const n = word.length;
      let currTrie = this.trie;

      for (let i = n - 1; i >= 0; i--) {
        const char = word.charAt(i);

        if (!currTrie.chars.get(char)) {
          currTrie.chars.set(char, new Trie());
        }
        currTrie = currTrie.chars.get(char);
      }

      currTrie.terminus = true;
    }

    this.stack = [];
  }
  query(char) {
    this.stack.push(char);

    let currTrie = this.trie;
    let i = this.stack.length - 1;

    while (this.stack.length) {
      const char = this.stack[i];
      currTrie = currTrie.chars.get(char);

      if (currTrie) {
        if (currTrie.terminus) {
          return true;
        } else {
          i--;
        }
      } else {
        return false;
      }
    }
  }
}

class Trie {
  constructor() {
    this.chars = new Map();
    this.terminus = false;
  }
}

const words = ["cd", "f", "kl"];
const input = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
const checker = new StreamChecker(words);

for (const char of input) {
  console.log(checker.query(char));
}
