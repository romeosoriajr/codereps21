function maxNumberOfBalloons(text) {
  const letters = {};

  for (let i = 0; i < text.length; i++) {
    letters[text[i]] = (letters[text[i]] || 0) + 1;
  }

  return (
    Math.min(
      letters["b"],
      letters["a"],
      Math.floor(letters["l"] / 2),
      Math.floor(letters["o"] / 2),
      letters["n"]
    ) || 0
  );
}

