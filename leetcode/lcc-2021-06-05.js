var maxPerformance = function (n, speeds, efficiencies, k) {
  const workers = new Array(n);
  for (let i = 0; i < n; i++) {
    workers[i] = { speed: BigInt(speeds[i]), efficiency: efficiencies[i] };
  }
  workers.sort((a, b) => b.efficiency - a.efficiency);

  let totalSpeed = BigInt(0);
  let max = BigInt(0);
  const heap = new MinHeap();
  for (let worker of workers) {
    const { speed, efficiency } = worker;
    totalSpeed += speed;

    heap.push(worker);
    if (heap.size() > k) totalSpeed -= heap.pop().speed;
    const total = totalSpeed * BigInt(efficiency);
    if (total > max) max = total;
  }
  return max % BigInt(1000000007);
};

class MinHeap {
  constructor() {
    this.store = [];
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return this.store.length === 0;
  }

  push(value) {
    this.store.push(value);
    this.heapifyUp(this.store.length - 1);
  }

  pop() {
    if (this.store.length < 2) return this.store.pop();
    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  heapifyDown(parent) {
    while (true) {
      let [child, child2] = [1, 2]
        .map((n) => parent * 2 + n)
        .filter((n) => n < this.store.length);
      if (this.shouldSwap(child2, child)) {
        child = child2;
      }
      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child],
        ];
        parent = child;
      } else {
        return parent;
      }
    }
  }

  heapifyUp(child) {
    while (child) {
      const parent = Math.floor((child - 1) / 2);
      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child],
        ];
        child = parent;
      } else {
        return child;
      }
    }
  }

  shouldSwap(child, parent) {
    return child && this.store[child].speed < this.store[parent].speed;
  }
}

function maxPerformanceRecursive(n, speed, efficiency, k) {
  let max = 0;
  const visited = new Set();

  helper(0, 0, Number.MAX_SAFE_INTEGER, visited, k);

  return max;

  function helper(currPerf, currSpeed, minEff, visited, count) {
    if (!count) {
      max = Math.max(max, currPerf);
    }

    for (let i = 0; i < n; i++) {
      if (visited.has(i)) continue;

      visited.add(i);

      const localSpeed = currSpeed + speed[i];
      const localEff = Math.min(minEff, efficiency[i]);
      const localPerf = localSpeed * localEff;

      helper(localPerf, localSpeed, localEff, visited, count - 1);
      visited.delete(i);
    }
  }
}
const n = 6;
const speed = [2, 10, 3, 1, 5, 8];
const efficiency = [5, 4, 3, 9, 7, 2];
const k = 2;
console.log(maxPerformance(n, speed, efficiency, k));
