function singleNumberBitManipulation(nums) {

  const result = [0,0];

  let diff = 0;

  //when running into the same number again, it 'cancels' out the diff previously set.
  
  for (let num of nums) {
    diff ^= num;
  }
  // we'll be left with a diff that is represented by two remaining numbers

  diff &= -diff;

  for (let num of nums) {
    if (num & diff === 0) {
      result[0] ^= num;
    } else {
      result[1] ^= num;
    }
  }

  return result;
}

function singleNumber(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      seen.delete(nums[i]);
    } else {
      seen.add(nums[i]);
    }
  }

  return Array.from(seen);
}

