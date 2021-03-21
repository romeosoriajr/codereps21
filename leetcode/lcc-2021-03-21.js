function reorderedPowerOf2 (N) {
  var visited = new Set();
  var nums = String(N).split('');

  return helper('', visited)

  function helper(numStr, visited) {

    if (visited.size == nums.length) {

      return Number.isInteger(Math.log2(Number(numStr)))

    }

    for (let i=0; i < nums.length; i++) {
      if (visited.has(i)) continue;
      if (numStr == '' && nums[i] == 0) continue;

      visited.add(i)
      numStr = numStr + nums[i];

      if (helper(numStr, visited)) {
        return true
      }

      visited.delete(i);
      numStr = numStr.substr(0, numStr.length-1);
    }

    return false;

  }
}

console.log(reorderedPowerOf2(218));
