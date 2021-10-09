class Node {
  constructor () {
    this.map = new Map();
    this.terminus = false;
  }
}
class Trie {
  constructor() {
    this.struct = new Node();
  }

  insert(word) {
    let curr = this.struct;
    for (let char of word) {
      if (!curr.map.get(char)) {
        curr.map.set(char, new Node());
      }

      curr = curr.map.get(char);
    }

    curr.terminus = true;
  }

  search(word) {
    let curr = this.struct;
    for (let char of word) {
      if (!curr.map.get(char)) {
        return false;
      }
      curr = curr.map.get(char);
    }

    return curr.terminus;
  }

  startsWith(prefix) {
    let curr = this.struct;
    for (let char of prefix) {
      if (!curr.map.get(char)) {
        return false;
      }
      curr = curr.map.get(char);
    }

    return !!curr;
  }

}

const trie = new Trie();

trie.insert("stuff");
trie.insert("apple");
console.log(trie.startsWith("app"));
console.log(trie.search("apple"));
