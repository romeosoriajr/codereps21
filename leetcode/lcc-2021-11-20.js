function singleNonDuplicate(nums) {


  let left = 0;
  let right = nums.length-1;
  let mid;
  while (left < right) {

    mid = Math.floor((right+left)/2);

    if (nums[mid] == nums[mid+1]) mid--;

    if ((mid-left+1) % 2) {
      right = mid;
    } else {
      left = mid+1;
    }
  }

  return nums[left];


}

const nums =  [3,3,7,7,10,11,11];
const nums1 = [1,1,2,3,3,4,4,8,8];
console.log(singleNonDuplicate(nums1));
console.log(singleNonDuplicate(nums));
