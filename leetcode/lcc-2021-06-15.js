function makesquare(matchsticks) {
  if (!matchsticks || matchsticks.length < 4) return false;

  const sum = matchsticks.reduce((a, v) => a + v);

  if (sum % 4 !== 0) return false;

  const targetLength = sum / 4;

  return helper(matchsticks, Array(4).fill(0), targetLength, 0);

  function helper(matchsticks, lengths, targetLength, index) {
    if (index == matchsticks.length) {
      for (let l of lengths) {
        if (l !== targetLength) return false;
      }

      return true;
    }

    for (let i = 0; i < 4; i++) {
      if (lengths[i] + matchsticks[index] > targetLength) continue;

      lengths[i] += matchsticks[index];

      if (helper(matchsticks, lengths, targetLength, index + 1)) {
        return true;
      }

      lengths[i] -= matchsticks[index];
    }

    return false;
  }
}

console.log(makesquare([1, 1, 2, 2, 2]));
