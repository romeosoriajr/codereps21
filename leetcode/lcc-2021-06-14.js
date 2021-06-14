function maximumUnits(boxTypes, truckSize) {
  let maxSize = truckSize;
  let maxUnits = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    const [maxQty, units] = boxTypes[i];

    if (maxSize >= maxQty) {
      maxUnits += maxQty + units;
      maxSize -= maxQty;
    } else {
      maxUnits += maxSize * units;
      return maxUnits;
    }
  }

  return maxUnits;
}
const boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
];
const truckSize = 10;
console.log(maximumUnits(boxTypes, truckSize));
