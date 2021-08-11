function minFlipsMonoIncr(s) {
  let ones = 0;
  let flipped = 0;

  for (let char of s) {
    if (char == "1") {
      ones++;
    } else {
      flipped = Math.min(ones, flipped + 1);
    }
  }

  return flipped;
}

const s = "00110";
console.log(minFlipsMonoIncr(s));
