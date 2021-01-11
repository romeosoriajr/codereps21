// nums1 is large enough to hold nums2
// nums1 is padded with space
// create merged array starting from the end of the arrays
function merge(nums1, m, nums2, n) {

  var rear = m+n-1; // points to end of arr

  var i=m;
  var j=n;

  while (i > 0 && j > 0) {
    if (nums1[i-1] > nums2[j-1]) {
      nums1[rear] = nums1[i-1];
      i--;
    } else {
      nums1[rear] = nums2[j-1];
      j--;
    }
    --rear;
  }

  while (j > 0) {
    nums1[rear] = nums2[j-1];
    j--;
    --rear;
  }

  return nums1;

}

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

console.log(merge(nums1, m, nums2, n));
