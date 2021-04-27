function furthestBuilding (heights, bricks, ladders) {
  let stack = [];
  let n = heights.length;

  for (let i=0; i < n-1; i++) {
    if (heights[i] >= heights[i+1]) continue;

    let diff = heights[i+1] - heights[i];
    // add(diff);

    let k=0;
    while (k < stack.length) {
      if (stack[k] > diff) {
        stack.splice(k, 0, diff);
        break;
      }
      k += 1;
    }
    
    if (k == stack.length) stack.push(diff);

    let sum = 0;
    for (let j=0; j < stack.length - ladders; j++) {
      sum += stack[j];
    }

    if (sum > bricks) return i;
  }

  return n-1;
}
var heights = [4,2,7,6,9,14,12];
var bricks = 5;
var ladders = 1;

console.log(furthestBuilding(heights, bricks, ladders));
