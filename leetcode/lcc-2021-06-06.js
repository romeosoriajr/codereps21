// check if the next number exists
// and count the streak;
function longestConsecutive (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (set.has(num-1)) continue;

    let next = x+1;
    while (set.has(next)) {
      next += 1;
    }
    max = Math.max(max, next-num);
  }
}
