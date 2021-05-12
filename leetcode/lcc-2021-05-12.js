class NumMatrix {
  constructor(matrix) {
    if (!matrix.length || !matrix[0].length) return;

    this.sums = new Array(matrix.length + 1);

    for (let i = 0; i < this.sums.length; i++) {
      this.sums[i] = new Array(matrix[0].length + 1).fill(0);
    }

    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
        this.sums[r + 1][c + 1] =
          this.sums[r + 1][c] +
          this.sums[r][c + 1] +
          matrix[r][c] -
          this.sums[r][c];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.sums[row2 + 1][col2 + 1] -
      this.sums[row1][col2 + 1] -
      this.sums[row2 + 1][col1] +
      this.sums[row1][col1]
    );
  }
}
