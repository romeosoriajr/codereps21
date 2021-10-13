function intersect(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  const result = [];

  while (i < m && j < n) {
    const a = nums1[i];
    const b = nums2[j];
    if (a == b) {
      result.push(a);
      i++;
      j++;
    } else if (a < b) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

function maxProfit(prices) {

  let curr = 0;
  let max = 0;

  for (let i=1; i < prices.length; i++) {
    const diff = prices[i] - prices[i-1];
    curr = Math.max(0, curr += diff)
    max = Math.max(curr, max)
  }

  return max;

}

