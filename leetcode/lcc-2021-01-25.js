function kLengthApart (nums, k) {

  var start = -k-1;

  for (let i=0; i < nums.length; i++) {

    if (nums[i]) {
      if (i-1 - start < k) return false;
      start = i;
    }

  }

  return true;

}
