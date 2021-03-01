function distributeCandies (candyType) {
  
  const uniques = new Set(candyType);

  return Math.min(candyType.length/2, uniques.size);
}

console.log(distributeCandies([1,1,2,3]))
