function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    const complement = target - a;
    const b = map.get(complement);

    if (b >= 0) {
      return [i, b];
    } else {
      map.set(a, i);
    }
  }
}


function merge(nums1, m, nums2, n) {

  let tail1 = m-1;
  let tail2 = n-1;

  let pointer = nums1.length-1;

  while (tail1 >= 0 && tail2 >= 0) {

    nums1[pointer--] = nums1[tail1] > nums2[tail2] ? nums1[tail1--] : nums2[tail2--];

  }

  while (tail1 >= 0) {
    nums1[pointer--] = nums1[tail1--];
  }

  while (tail2 >= 0) {
    nums1[pointer--] = nums2[tail2--];
  }

  console.log(nums1);

}
const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));
