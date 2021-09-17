function spiralOrder(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = [];

  let north = 0;
  let east = n - 1;
  let south = m - 1;
  let west = 0;

  while (result.length < m * n) {
    // move along north boundary going to the east;
    for (let col = west; col <= east && result.length < m * n; col++) {
      result.push(matrix[north][col]);
    }

    // move along the east boundary going south
    for (
      let row = north + 1;
      row <= south - 1 && result.length < m * n;
      row++
    ) {
      result.push(matrix[row][east]);
    }

    // move along south boundary going west
    for (let col = east; col >= west && result.length < m * n; col--) {
      result.push(matrix[south][col]);
    }

    // move along west boundary going north
    for (
      let row = south - 1;
      row >= north + 1 && result.length < m * n;
      row--
    ) {
      result.push(matrix[row][west]);
    }

    west++;
    east--;
    north++;
    south--;
  }

  return result;
}

