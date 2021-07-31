//two passes
//calculate the water from left to the summit
//calculate again from right to the summit
function trap(height) {
  const m = height.length;

  let tallestIndex = 0;

  for (let i = 0; i < m; i++) {
    if (height[i] > height[tallestIndex]) tallestIndex = i;
  }
  let total = 0;

  let wall = 0;
  for (let i = 0; i < tallestIndex; i++) {
    if (wall < height[i]) {
      wall = height[i];
    } else {
      total += wall - height[i];
    }
  }

  wall = 0;
  for (let i = m - 1; i > tallestIndex; i--) {
    if (wall < height[i]) {
      wall = height[i];
    } else {
      total += wall - height[i];
    }
  }

  return total;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
