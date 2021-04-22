function minimumTotal (triangle) {

  var rows = triangle.length;

  // stores the lowest sum at each position
  var pathSums = [];
  pathSums.push(triangle[0])

  for (let row = 1; row < rows; row++) {
    
    //stores the current rows of minimum sums
    var sums = [];
    var width = triangle[row].length;

    for (let i=0; i < width; i++) {
      var item = triangle[row][i];

      if (i == 0) {
        sums.push(pathSums[row-1][0]+item)
      } else if (i == width-1) {
        sums.push(pathSums[row-1][i-1]+item)
      } else {
        var c1 = pathSums[row-1][i-1] + item;
        var c2 = pathSums[row-1][i] + item;
        var lowest = Math.min(c1, c2);
        sums.push(lowest);
      }

    }
    pathSums.push(sums);

  }

  return Math.min(...pathSums[rows-1])

}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
