'use strict';
function quickSort (arr) {

  _sort(0, arr.length-1);
  return arr;

  function _sort(start, end) {
    if (start < end) {
      var pivot = _partition(start, end);
      _sort(start, pivot-1);
      _sort(pivot+1, arr.length-1);
    }
  }

  function _partition (start, end) {

    var pivotNum = arr[end];

    var i = start-1;

    for (let j=start; j < end; j++) {

      if (arr[j] <= pivotNum) {
        i++;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }

    i++;
    [arr[i], arr[end]] = [arr[end], arr[i]];

    return i;

  }

}

module.exports = { quickSort }
