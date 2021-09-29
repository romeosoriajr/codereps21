function sortArrayByParityII(nums) {
  const n = nums.length;
  let i=0;
  let j=n-1;

  while ( i < n && j >= 0) {

    // if even in correct spot move forward
    if (nums[i] % 2 == 0) {
      i += 2;

    // if odd in correct spot move backward
    } else if (nums[j] % 2 == 1) {
      j -= 2;
    } else {
      // neither are in correct spot, so should be swapped
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  return nums;
}

function sortArrayByParityIINaive(nums) {
  const evens = [];
  const odds = [];

  for (let num of nums) {
    if (num % 2 == 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  const result = [];

  for (let i = 0; i < evens.length; i++) {
    result.push(evens[i], odds[i]);
  }

  return result;
}

const nums = [4, 2, 5, 7];

console.log(sortArrayByParityII(nums));
