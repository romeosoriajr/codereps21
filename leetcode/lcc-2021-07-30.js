class MapSum {
  constructor() {
    this.map = new Map();
  }

  insert(key, value) {
    this.map.set(key, value);
  }

  sum(prefix) {
    let sum = 0;
    const regex = new RegExp(`^${prefix}`);
    const foundKeys = [];

    for (let key of this.map.keys()) {
      if (regex.test(key)) {
        foundKeys.push(key);
        sum += this.map.get(key);
      }
    }
    return sum;
  }
}

const mapSum = new MapSum();
mapSum.insert("ap", 2);
mapSum.insert("apple", 3);
mapSum.insert("blah", 5);
