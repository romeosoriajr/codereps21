function longestOnes (nums, k) {
  
  let i=0;
  let j=0;

  while (j < nums.length) {
    if (nums[j] == 0) k--;

    if (k < 0 && nums[i++] == 0) {
      k++;
    }
    j++;
  }


  return j-i;

}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) == 6)
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) == 10)
