function findKthLargest (nums, k) {
  var l = nums.length - k;
  var low = 0;
  var high = nums.length - 1;

  while (low < high) {
    var j = partition(nums, low, high);
    if (j < l) {
      low = j + 1;
    } else if (j > l){
      high = j - 1;
    } else {
      break;
    }
  }

  return nums[l];

  function partition (arr, low, high) {
    var i = low;
    var j = high + 1;

    while (true) {
      while (i < high && arr[++i] < arr[low]);
      while (j > low && arr[low] < arr[--j]);

      if (i >= j) break;

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];

    return j;
  }
}

console.log(findKthLargest([3,2,1,5,6,4], 2))
