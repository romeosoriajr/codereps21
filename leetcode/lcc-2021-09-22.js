function maxLength(arr) {
  let result = 0;

  const uniqueWords = arr.filter(isUnique);

  const memo = {};

  result = helper(uniqueWords, "", 0, result);

  return result;

  function isUnique(str) {
    const set = new Set(str.split(""));
    return set.size == str.length;
  }

  function helper(arr, currStr, index, result) {
    if (memo[currStr]) {
      return memo[currStr];
    }

    const uniquePath = isUnique(currStr);

    if (uniquePath) {
      result = Math.max(result, currStr.length);
    }

    if (index == arr.length || !uniquePath) {
      memo[currStr] = result;
      return result;
    }

    for (let j = index; j < arr.length; j++) {
      result = helper(arr, `${currStr}${arr[j]}`, j + 1, result);
    }

    memo[currStr] = result;
    return result;
  }
}

const arr = ["abcdefghijklmnopqrstuvwxyz"];
console.log(maxLength(arr));
