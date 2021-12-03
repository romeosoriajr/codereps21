function maxProduct (nums) {
  
  let currMin = nums[0];
  let currMax = nums[0];
  let result  = nums[0];

  for (let i=1; i < nums.length; i++) {
    const num = nums[i];

    // swap because an even number of negatives will make a greater positive
    if (num < 0) {
      [currMin, currMax] = [currMax, currMin]
    }

    // instead of swapping, can stick all possible outcomes in array
    // and get the min and max
    // e.g. const values = [num, num * currMin, num * currMax];

    currMin = Math.min(num, num * currMin);
    currMax = Math.max(num, num * currMax);

    result = Math.max(currMax, result);

  }

  return result;
}

