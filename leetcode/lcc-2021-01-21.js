function mostCompetitive (nums, k) {
  var stack = [];

  for (let i=0; i < nums.length; i++) {
    var currNum = nums[i];

    while (stack.length && stack[stack.length-1] > currNum
            && stack.length-1 + nums.length-i >= k) {
      stack.pop();
    }

    if (stack.length < k) {
      stack.push(currNum);
    }
  }

  return stack;

}

console.log(mostCompetitive([2,4,3,3,5,4,9,6], 4));
