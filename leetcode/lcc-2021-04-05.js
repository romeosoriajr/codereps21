function isIdealPermutation(A) {

  for (let i=0; i < A.length; i++) {
    if (Math.abs(i-A[i]) > 1) return false;
  }

  return true;

}

// naive..
// can return false if there is a deviation greater than 1 or -1
function isIdealPermutationNaive (A) {

  var globalInversions = 0;
  var localInversions = 0;

  for (let i=0; i < A.length-1; i++) {

    if (A[i] > A[i+1]) {
      localInversions += 1;
    }

    for (let j=i+1; j < A.length; j++) {
      if (A[i] > A[j]) {
        globalInversions += 1;
      }
    }
  }

  return globalInversions == localInversions;

}

console.log(isIdealPermutation([1,0,2]))
