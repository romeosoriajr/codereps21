function minRefuelStops(target, startFuel, stations) {
  const n = stations.length;

  const dp = Array(n+1).fill(0);

  dp[0] = startFuel;

  for (let i=0; i < n; i++) {
    for (let j=i; j >= 0; j--) {
      const [distance, refuel] = stations[i]
      if (dp[j] >= distance) {
        dp[j+1] = Math.max(dp[j+1], dp[j] + refuel)
      }
    }
  }

  for (let i=0; i < n+1; i++) {
    if (dp[i] >= target) return i;
  }

  return -1;

}

const target = 100;
const startFuel = 10;
const stations = [
  [10, 60],
  [20, 30],
  [30, 30],
  [60, 40],
];
console.log(minRefuelStops(target, startFuel, stations));
