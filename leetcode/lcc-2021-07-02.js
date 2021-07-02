function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length-k;

  while (left < right) {
    let mid = left + Math.floor((right-left) /2);
    if (x - arr[mid] > arr[mid+k] - x) {
      left = mid+1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left+k);
}

const arr = [1,1,1,10,10];
const k = 1;
const x = 9;
console.log(findClosestElements(arr, k, x))
