function wiggleMaxLength (nums) {

  var length = nums.length;
  var pos = new Array(length).fill(null);
  var neg = new Array(length).fill(null);

  pos[0] = 1;
  neg[0] = 1;

  for (let i=1; i < length; i++) {

    var curr = nums[i];
    var prev = nums[i-1];

    if (curr > prev) {
      pos[i] = neg[i-1] + 1;
      neg[i] = neg[i-1];
    } else if (curr < prev) {
      neg[i] = pos[i-1] + 1;
      pos[i] = pos[i-1]
    } else {
      pos[i] = pos[i-1];
      neg[i] = neg[i-1];
    }

  }

  return Math.max(pos[length-1], neg[length-1])

}
