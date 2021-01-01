function canFormArray (arr, pieces) {

  for (let piece of pieces) {
    const i = arr.indexOf(piece[0]);

    const subArr = arr.slice(i, i + piece.length);

    if (subArr.toString() != piece.toString()) {
      return false;
    }

  }
  return true;
}

function canFormArrayOld (arr, pieces) {

  if (!arr.length) return true;
  if (!pieces.length) return false;

  for (let i=0; i < pieces.length; i++) {

    var currPieces = pieces[i];

    var j=0;
    while (j < currPieces.length && arr[j] == currPieces[j]) {
      j++;
    }

    if (j == currPieces.length) {

      var shifted = arr.splice(0, j);
      var sliced = pieces.splice(i, 1);

      if (canFormArray(arr, pieces)) {
        return true
      } else {
        arr.splice(0, 0, shifted);
        pieces.splice(i, 0, sliced)
      }

    }

  }

  return false;

}

var arr = [91,4,64,78];
var pieces = [[78],[4,64],[91]];
console.log(canFormArray(arr, pieces))
