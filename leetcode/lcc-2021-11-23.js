function largestComponentSize(nums) {
  let maxNum = Math.max(...nums);

  const uFind = new UnionFind(maxNum + 1);

  for (let num of nums) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) {
        uFind.union(num, i);
        uFind.union(num, Math.floor(num / i));
      }
    }
  }

  let maxSize = 1;

  const map = new Map();
  for (let num of nums) {
    const parent = uFind.find(num);
    map.set(parent, (map.get(parent) || 0) + 1);
    maxSize = Math.max(maxSize, map.get(parent));
  }

  return maxSize;
}

class UnionFind {
  constructor(size) {
    this.parent = new Map();

    for (let i = 0; i < size; i++) {
      this.parent.set(i, i);
    }
  }

  union(x, y) {
    const findX = this.find(x);
    const findY = this.find(y);

    this.parent.set(findX, this.parent.get(findY));
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }
}
