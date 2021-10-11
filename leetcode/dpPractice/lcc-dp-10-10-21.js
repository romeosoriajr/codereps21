function deleteAndEarn(nums) {

  if (nums.length == 1) return nums[0];
  const max = Math.max(...nums);

  const sums = new Array(max+1).fill(0);

  for (let num of nums) {
    sums[num] += num;
  }

  for (let i=2; i <= max; i++) {
    sums[i] = Math.max(sums[i-2]+sums[i], sums[i-1]);
  }

  return sums[max]

}
// house robber ii
function rob(nums) {

  // array is circular..
  // just start from beginning
  // or can start from the second house


  const first = nums.slice(0, nums.length-1);
  const second = nums.slice(1)

  return Math.max(helper(first), helper(second));


  function helper(arr) {

    const m = arr.length;
    const robbed = new Array(m).fill(null);
    const locked = new Array(m).fill(null);

    locked[0] = 0;
    robbed[0] = arr[0];

    for (let i=1; i < m; i++) {

      locked[i] = Math.max(locked[i-1], robbed[i-1]);
      robbed[i] = locked[i-1] + arr[i];

    }

    return Math.max(locked[m-1], robbed[m-1]);

    
  }

}
