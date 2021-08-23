function rectangleArea(rectangles) {
  const mod = BigInt(10 ** 9 + 7);
  let result = BigInt(0);
  let plots = [];

  for (let r of rectangles) {
    addRectangle(plots, r, 0);
  }

  for (let [x1, y1, x2, y2] of plots) {
    result = (result + (BigInt(x2 - x1) * BigInt(y2 - y1))) % mod;
  }

  return Number(result % mod);

  function addRectangle(plots, current, pos) {
    if (pos >= plots.length) {
      plots.push(current);
      return;
    }

    let rec = plots[pos];

    let [currX1, currY1, currX2, currY2] = current;
    let [recX1, recY1, recX2, recY2] = rec;

    if (
      currX2 <= recX1 ||
      currY2 <= recY1 ||
      currX1 >= recX2 ||
      currY1 >= recY2
    ) {
      addRectangle(plots, current, pos + 1);
      return;
    }

    if (currX1 < recX1) {
      addRectangle(plots, [currX1, currY1, recX1, currY2], pos + 1);
    }

    if (currX2 > recX2) {
      addRectangle(plots, [recX2, currY1, currX2, currY2], pos + 1);
    }

    if (currY1 < recY1) {
      addRectangle(
        plots,
        [Math.max(currX1, recX1), currY1, Math.min(recX2, currX2), recY1],
        pos + 1
      );
    }

    if (currY2 > recY2) {
      addRectangle(
        plots,
        [Math.max(currX1, recX1), recY2, Math.min(recX2, currX2), currY2],
        pos + 1
      );
    }
  }
}
const rectangles = [[224386961,128668997,546647847,318900555]]
console.log(rectangleArea(rectangles));
