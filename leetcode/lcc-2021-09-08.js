function shiftingLetters(s, shifts) {
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
  }

  return shifts.map(shift).join("");

  function shift(offset, i) {
    return String.fromCharCode(((s.charCodeAt(i) - 97 + offset) % 26) + 97);
  }
}

const s = "abc";
const shifts = [3, 5, 9];
console.log(shiftingLetters(s, shifts));
