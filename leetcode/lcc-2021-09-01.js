function arrayNesting(nums) {
  let result = 0;
  for (let i=0; i < nums.length; i++) {
    let size = 0;

    let k=i;
    while (nums[k] >=0) {
      const num = nums[k];
      nums[k] = -1;
      size++;
      k = num;
    }

    result = Math.max(result, size);
  }

  return result;
}

const nums = [0,2,1];
console.log(arrayNesting(nums));
