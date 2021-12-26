function kClosest(points, k) {
  const map = new Map();

  for (const [x, y] of points) {
    const distance = Math.sqrt(x ** 2 + y ** 2);

    if (!map.has(distance)) map.set(distance, []);
    map.get(distance).push([x, y]);
  }

  const distances = Array.from(map.keys()).sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < distances.length; i++) {
    const arr = map.get(distances[i]);

    for (let p of arr) {
      result.push(p);
      if (!--k) break;
    }
    if (!k) break;
  }

  return result;
}

const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;

console.log(kClosest(points, k));
