class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.array = [];
    this.set = new Set();
  }

  insert(val) {
    if (this.set.has(val)) {
      return false;
    }

    this.set.add(val);
    this.array.push(val);
    this.map.set(val, this.array.length - 1);
    return true;
  }

  remove(val) {
    if (this.set.has(val)) {
      this.set.delete(val);
      const oldIndex = this.map.get(val);
      this.map.delete(val);

      if (oldIndex == this.array.length - 1) {
        this.array.pop();
      } else {
        //replace the removed value with the tail
        const tailVal = this.array.pop();
        this.map.set(tailVal, oldIndex);
        this.array[oldIndex] = tailVal;
      }

      return true;
    }

    return false;
  }

  getRandom() {
    const n = this.array.length;
    const random = Math.floor(Math.random() * n);
    return this.array[random];
  }
}
