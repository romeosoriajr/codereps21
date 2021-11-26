function searchInsert(nums, target) {


  let left = 0;
  let right = nums.length;

  while (left < right) {
    console.log(left, right);
    const mid = Math.floor((right+left)/2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }

  return left;

}


console.log(searchInsert([1,3,5,6], 2))
