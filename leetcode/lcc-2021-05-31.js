function suggestedProducts(products, searchWord) {
  products.sort();
  const result = [];
  let prefix = "";

  for (let c of searchWord) {
    const list = [];
    prefix += c;

    //binary search
    let left = 0;
    let right = products.length;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (prefix <= products[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    for (let j = 0; j < 3; j++) {
      if (
        left+j < products.length &&
        products[left+j].startsWith(prefix)
      )
        list.push(products[left+j]);
    }

    result.push(list);
  }

  return result;
}

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

console.log(suggestedProducts(products, searchWord));
