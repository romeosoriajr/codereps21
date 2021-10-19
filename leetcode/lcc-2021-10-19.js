function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (let num of nums2) {
    while (stack.length && stack[stack.length-1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map(n => map.get(n) || -1)

}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
