function maxArea (height) {

  var result = 0;

  var left = 0;
  var right = height.length-1;

  while (left < right) {

    var w = Math.min(height[left], height[right]);
    var h = right-left;

    if (height[left] > height[right]) {
      --right;
    } else {
      ++left;
    }

    result = Math.max(result, w*h);
  }

  return result;

}

console.log(maxArea([4,3,2,1,4]))
