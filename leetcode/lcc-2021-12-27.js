function findComplement(num) {

  let i=0;
  let j=0;

  // create a bitmask to subtract num from;
  while (i < num) {
    i += Math.pow(2, j);
    j++;
  }

  return i - num;
}

console.log(findComplement(5));
