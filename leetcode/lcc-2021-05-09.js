function isPossible(target) {
  const heap = [,];
  let sum = 0;

  for (let num of target) {
    sum += num;
    heapify(num);
  }

  while (heap[1] !== 1) {
    let num = extract();
    sum -= num;
    if (num <= sum || sum < 1) return false;
    num %= sum;
    sum += num;
    heapify(num);
  }

  return true;

  function heapify(val) {
    let i = heap.length;
    let p = i >> 1;

    heap.push(val);
    while (heap[p] < heap[i]) {
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
      p = i >> 1;
    }
  }

  function extract() {
    if (heap.length == 1) return null;
    let top = heap[1];
    let left;
    let right;
    let i = 1;
    let child = heap[3] > heap[2] ? 3 : 2;

    if (heap.length > 2) {
      heap[1] = heap.pop();
    } else {
      heap.pop();
    }


    while (heap[i] < heap[child]) {
      [heap[i], heap[child]] = [heap[child], heap[i]];
      i = child;
      left = i << 1;
      right = left + 1;
      child = heap[right] > heap[left] ? right : left
    }

    return top;
  }
}

console.log(isPossible([1, 1, 1, 2]));
