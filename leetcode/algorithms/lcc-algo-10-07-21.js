function rotate(nums, k) {
  const n = nums.length;
  const mod = k % n;

  //flip entire array
  flip(0, n-1);

  //entire array is reverse, flip only the rotated elements
  flip(0, mod-1);

  // flip the range that hasnt been flipped yet
  flip(k, n-1);

  return nums;

  function flip(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++;
      end--;
    }
  }

}

//const nums = [-1,-100,3,99], k = 2
const nums = [1,2,3,4,5,6,7], k = 3
console.log(rotate(nums, k))

function sortedSquares(nums) {
  const a = [];
  const b = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (n < 0) {
      a.push(n ** 2);
    } else {
      b.push(n ** 2);
    }
  }

  let i = a.length - 1;
  let j = 0;

  while (i >= 0 && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i--;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i >= 0) {
    result.push(a[i]);
    i--;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}
