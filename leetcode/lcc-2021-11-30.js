function maximalRectangle(matrix) {
  if (!matrix || !matrix.length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;

  let maxArea = 0;

  const dp = new Array(n).fill(null);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[j] = matrix[i][j] == "1" ? dp[j] + 1 : 0;
    }

    maxArea = Math.max(maxArea, getMaxArea());
  }

  return maxArea;

  function getMaxArea() {
    let maxArea = 0;
    let left = new Array(n).fill(null);
    let right = new Array(n).fill(null);

    const stack = [];

    for (let i = 0; i < n; i++) {
      if (!stack.length) {
        stack.push(i);
        left[i] = 0;
      } else {
        while (stack.length && dp[stack[stack.length - 1]] >= dp[i]) {
          stack.pop();
        }

        left[i] = !stack.length ? 0 : stack[stack.length - 1] + 1;
        stack.push(i);
      }
    }

    while (stack.length) {
      stack.pop();
    }

    for (let i = n - 1; i >= 0; i--) {
      if (!stack.length) {
        stack.push(n - 1);
        right[i] = n - 1;
      } else {
        while (stack.length && dp[stack[stack.length - 1]] >= dp[i]) {
          stack.pop();
        }

        right[i] = !stack.length ? n - 1 : stack[stack.length - 1] - 1;
        stack.push(i);
      }
    }

    const area = new Array(n);

    for (let i = 0; i < n; i++) {
      area[i] = (right[i] - left[i] + 1) * dp[i];
      maxArea = Math.max(maxArea, area[i]);
    }
    return maxArea;
  }
}

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalRectangle(matrix));
