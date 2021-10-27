function generate(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const prevRow = result[result.length - 1];
    const row = new Array(i).fill(null);
    row[0] = 1;
    row[i] = 1;

    //this shouldnt run until the first two rows are built
    for (let j = 1; j < i; j++) {
      row[j] = prevRow[j] + prevRow[j - 1];
    }

    result.push(row);
  }
  return result;
}


