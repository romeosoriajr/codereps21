function minCostToMoveChips(position) {
  let even = 0;
  let odd = 0;

  for (let pos of position) {
    pos % 2 ? odd++ : even++;
  }

  return Math.min(odd, even);
}

const position = [1, 2, 3];

console.log(minCostToMoveChips(position));
