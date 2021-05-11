// look for the min subarray instead
function maxScore (cardPoints, k) {

  const length = cardPoints.length;
  const subLength = cardPoints.length-k;

  let sum=0;

  for(let i=0; i < subLength; i++) {
    sum += cardPoints[i];
  }

  let minSum = sum;
  let totalSum = sum;

  for (let i=1; i <= length-subLength; i++) {
    sum -= cardPoints[i-1];
    sum += cardPoints[i+subLength-1];
    minSum = Math.min(minSum, sum);
    totalSum += cardPoints[i+subLength-1];
  }

  return totalSum - minSum;

}

