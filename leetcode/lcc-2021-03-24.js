function advantageCount(A, B) {
  const indices = B.map((_, i) => i)
                    .sort((a, b) => B[a] - B[b]);

  A.sort((a, b) => a-b);

  const result = [];
  for (let bIndex of indices) {
    result[bIndex] = A[0] > B[bIndex] ? A.shift() : A.pop();
  }

  return result;

}

console.log(advantageCount([12,24,8,32], [13,25,32,11]))
