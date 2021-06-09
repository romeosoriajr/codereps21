// monotonic queue
function maxResult(nums, k) {
  const dq = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (dq.length && dq[0] > i + k) {
      dq.shift();
    }

    if (!dq.length) {
      dq.push(i);
    } else {
      nums[i] = nums[dq[0]] + nums[i];
      while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
        dq.pop();
      }

      dq.push(i);
    }
  }

  return nums[0];
}

const nums = [1, -5, -20, 4, -1, 3, -6, -3];
const k = 2;
console.log(maxResult(nums, k));
