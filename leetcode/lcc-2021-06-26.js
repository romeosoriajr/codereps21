function countSmaller(nums) {
  const pairs = nums.map((num, i) => {
    return [num, i];
  });

  const tally = Array(nums.length).fill(0);

  mergeSort(pairs);
  return tally;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let midpoint = Math.ceil(arr.length / 2) - 1;

    let left = mergeSort(arr.slice(0, midpoint + 1));
    let right = mergeSort(arr.slice(midpoint + 1, arr.length));

    let lPointer = 0;
    let rPointer = 0;

    let lessThanCount = 0;
    let sorted = [];

    while (lPointer < left.length) {
      if (rPointer >= right.length) {
        sorted.push(left[lPointer]);
        tally[left[lPointer][1]] += lessThanCount;
        lPointer++;
      } else if (left[lPointer][0] > right[rPointer][0]) {
        lessThanCount++;
        sorted.push(right[rPointer]);
        rPointer++;
      } else {
        tally[left[lPointer][1]] += lessThanCount;
        sorted.push(left[lPointer]);
        lPointer++;
      }
    }

    while (rPointer < right.length) {
      sorted.push(right[rPointer++]);
    }

    return sorted;
  }
}

console.log(countSmaller([5, 2, 6, 1]));
