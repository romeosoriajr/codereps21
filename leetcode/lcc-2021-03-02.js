function findErrorNums (nums) {

  var map = Array(nums.length).fill(0);

  for (let i=0; i < nums.length; i++) {
    map[nums[i]-1] += 1;
  }

  var repeat = map.findIndex((v) => v == 2);
  var missing = map.findIndex((v) => v == 0);

  return [repeat+1, missing+1]
}
