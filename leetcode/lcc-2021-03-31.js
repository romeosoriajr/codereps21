function movesToStamp (stamp, target) {

  var targetArr = target.split('');
  var result = [];
  var visited = new Array(targetArr.length).fill(false);
  var stars = 0;


  while (stars < targetArr.length) {
    var swapped = false;
    for (let i=0; i <= targetArr.length - stamp.length; i++) {
      if (!visited[i] && canSwap(i)) {
        stars = swap(i, stamp.length, stars);
        swapped = true;
        visited[i] = true;
        result.push(i);
        if (stars == targetArr.length) {
          break;
        }
      }
    }

    if (!swapped) return [];
  }

  return result.reverse();


  // does targetsubstring match the stamp?
  function canSwap(pos) {
    for (let i=0; i < stamp.length; i++) {
      var t = targetArr[pos + i]
      if (t !== '*' && t != stamp[i]) {
        return false;
      }
    }
    return true;
  }

  function swap(pos, length, count) {
    for (let i=0; i < length; i++) {
      if (targetArr[i+pos] != '*') {
        targetArr[i+pos] = '*';
        count += 1;
      }
    }

    return count;
  }
}

console.log(movesToStamp('abca', 'aabcaca'))
