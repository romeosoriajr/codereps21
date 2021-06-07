function minCostClimbingStairs (cost) {
  let first = cost[0];
  let second = cost[1];

  if (cost.length > 2) {
    for (let i=2; i < cost.length; i++) {
      const curr = cost[i] + Math.min(first, second);
      first = second;
      second = curr;
    }
  }

  return Math.min(first, second);
}

const cost = [10,15,20]; 
console.log(minCostClimbingStairs(cost));
