function missingNumber (nums) {
  var l = nums.length;
  var e = (l*(l+1))/2
  var a = nums.reduce((t,v) => t + v, 0)
  return e - a
}

function missingNumberOld (nums) {
  var n = nums.length;

  nums.sort((a, b) => a-b);

  for (let i=0; i < n; i++) {

    if (i !== nums[i]) {
      return i;
    }
  }

  return n;

}

console.log(missingNumber([3,0,1]) == 2)
console.log(missingNumber([0,1]) == 2)
console.log(missingNumber([9,6,4,2,3,5,7,0,1]) == 8)
console.log(missingNumber([0]) == 1)
