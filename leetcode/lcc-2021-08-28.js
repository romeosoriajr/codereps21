function jobScheduling(startTime, endTime, profit) {
  const n = startTime.length;

  const jobs = new Array(n).fill(null);

  for (let i = 0; i < startTime.length; i++) {
    jobs[i] = [startTime[i], endTime[i], profit[i]];
  }

  jobs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n).fill(null);

  //job with the last start time populates the initial profit
  dp[n - 1] = jobs[n - 1][2];

  for (let curr = n - 2; curr >= 0; curr--) {
    const next = findNext(curr);
    dp[curr] = Math.max(
      jobs[curr][2] + (next == -1 ? 0 : dp[next]),
      dp[curr + 1]
    );
  }

  return dp[0];

  // find the next available job that starts later than the current job;
  function findNext(curr) {
    for (let next = curr + 1; next < n; next++) {
      if (jobs[next][0] >= jobs[curr][1]) {
        return next;
      }
    }

    return -1;
  }
}

const startTime = [1, 2, 3, 3];
const endTime = [3, 4, 5, 6];
const profit = [50, 10, 40, 70];
console.log(jobScheduling(startTime, endTime, profit));
