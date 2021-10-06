function search(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const midpoint = Math.floor((left + right) / 2);

    const num = nums[midpoint];

    if (num == target) {
      return midpoint;
    } else if (num < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return -1;
}

function solution (isBadVersion) {
  return function firstBadVersion(n) {

    let left = 0;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left+right)/2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid+1;
      }
    }

    return left;
  }
}

function searchInsert(nums, target) {

  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    if(nums[mid] == target) return mid;

    if (nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }

  }

  return left;
}


