function slowestKey(releaseTimes, keysPressed) {
  let longest = releaseTimes[0];
  let result = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const currKey = keysPressed[i];
    const duration = releaseTimes[i] - releaseTimes[i - 1];

    if (duration == longest) {
      result = result < currKey ? currKey : result;
    } else if (duration > longest) {
      longest = duration;
      result = currKey;
    }
  }

  return result;
}

const releaseTimes = [9, 29, 49, 50],
  keysPressed = "cbcd";
console.log(slowestKey(releaseTimes, keysPressed));
