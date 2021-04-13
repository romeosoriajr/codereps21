class NestedIterator {
  constructor(list) {
    this.generator = this.listGen(list);
    this.nextVal = this.generator.next();
  }

  hasNext() {
    return !this.nextVal.done;
  }

  next() {
    const val = this.nextVal.value;
    this.nextVal = this.generator.next();
    return val;
  }

  *listGen(list) {
    for (const item of list) {
      item.isInteger() ? yield item.getInteger() : yield* this.listGen(item.getList());
    }
  }
}
