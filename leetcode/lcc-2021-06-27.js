function candy(ratings) {
  let prev = 1;
  let descend = 0;
  let result = 1;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      if (descend > 0) {
        result += (descend * (descend + 1)) / 2;
        if (descend >= prev) {
          result += descend - prev + 1;
        }
        prev = 1;
        descend = 0;
      }
      prev = ratings[i] == ratings[i - 1] ? 1 : prev + 1;
      result += prev;
    } else {
      descend++;
    }
  }

  if (descend > 0) {
    result += descend * (descend+1) / 2;
    if (descend >= prev) {
      result += descend - prev + 1;
    }
  }

  return result;
}

console.log(candy([1, 0, 2]));
