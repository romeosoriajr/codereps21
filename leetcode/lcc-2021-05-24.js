function toLowerCase(s) {
  return s
    .split("")
    .map((char) => {
      let charCode = char.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        charCode = charCode - 65 + 97;
        return String.fromCharCode(charCode);
      } else {
        return char;
      }
    })
    .join("");
}
