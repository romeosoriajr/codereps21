function getMaximumGenerated (n) {
  var nums = [0,1];
  var maxInt = n >= 2 ? 1 : nums[n]
  var i=2;

  var newNum;

  while (i <= n) {
    if (nums.length % 2 == 0) {
      newNum = nums[nums.length/2]
      nums.push(newNum);
    } else {
      var index = (nums.length-1)/2
      newNum = nums[index] + nums[index+1];
      nums.push(newNum);
    }

    maxInt = Math.max(maxInt, newNum);

    i++;
    
  }

  return maxInt;

}

console.log(getMaximumGenerated(3));
