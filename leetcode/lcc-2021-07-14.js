function customSortString(order, str) {

  const positions = Array(order.length).fill(0);
  const remainders = [];

  for (let i=0; i < str.length; i++) {

    const foundIndex = order.indexOf(str[i]);

    if (foundIndex !== -1) {
      positions[foundIndex] += 1;
    } else {
      remainders.push(str[i]);
    }

  }

  const result = [];

  for (let i=0; i < order.length; i++) {
    for (let j=0; j < positions[i]; j++) {
      result.push(order[i]);
    }
  }

  return result.join('') + remainders.join('');

}

console.log(customSortString("cba", "abcd") == "cbad");
