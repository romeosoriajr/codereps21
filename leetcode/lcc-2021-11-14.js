class CombinationIterator {
  constructor(chars, length) {
    this.chars = [...chars];
    this.length = length;

    this.iterator = this._gen('', 0);
    this.curr = this.iterator.next()

  }

  next() {
    const prev = this.curr;
    this.curr = this.iterator.next();
    return prev.value;
  }

  hasNext() {
    return !this.curr.done;
  }

  * _gen(str, index) {
    if (str.length == this.length) yield str;

    for (let i=index; i < this.chars.length; i++) {
      yield* this._gen(str+this.chars[i], i + 1);
    }

  }
}

const iterator = new CombinationIterator('abc', 2);
console.log(iterator.next());
console.log(iterator.hasNext());
