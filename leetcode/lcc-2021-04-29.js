function searchRange (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = [-1, -1];

  //this will find the left-most target
  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (nums[mid] == target) {
      result[0] = mid;
      right = mid-1;
    } else if (nums[mid] > target){
      right = mid-1;
    } else {
      left = mid+1
    }
  }

  //this will find the right-most target
  left = 0;
  right = nums.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (nums[mid] == target) {
      result[1] = mid;
      left = mid+1;
    } else if (nums[mid] > target){
      right = mid-1;
    } else {
      left = mid+1
    }
  }

  return result;
}

const nums = [5,7,7,8,8,10];
const target = 8;

console.log(searchRange(nums, target));
