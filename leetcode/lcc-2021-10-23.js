// in a sorted array, left < mid, mid < right
// when rotated, mid can possibly be mid > right
function findMin(nums) {
  let left = 0;
  let right = nums.length-1;
  let mid;

  while (left < right) {
    mid = Math.floor((right+left)/2)

    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid+1;
    } else {
      right--;
    }
  }

  return nums[left];
}

