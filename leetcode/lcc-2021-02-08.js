class PeekingIterator {

  constructor(iterator) {
    this.iterator = iterator;
    this.peekVal = null;
  }

  peek () {
    if (this.peekVal == null) {
      this.peekVal = this.iterator.next();
    } 

    return this.peekVal;
  }

  next () {
    if (this.peekVal) {
      var nextVal = this.peekVal;
      this.peekVal = null;
      return nextVal;
    } else {

      return this.iterator.next();
    }
  }

  hasNext() {
    return this.peekVal || this.iterator.hasNext();
  }
}

