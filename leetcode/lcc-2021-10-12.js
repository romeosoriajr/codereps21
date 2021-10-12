function guessNumber(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const midpoint = Math.floor((left + right) / 2);

    const result = guess(midpoint);

    if (result == 0) {
      return midpoint;
    } else if (result == -1) {
      right = midpoint;
    } else {
      left = midpoint + 1;
    }
  }

  return midpoint;
}
