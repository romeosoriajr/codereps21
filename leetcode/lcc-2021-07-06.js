function minSetSize(arr) {
  const n = arr.length;
  const minLength = n / 2;

  const nums = new Map();

  for (let num of arr) {
    nums.set(num, (nums.get(num) + 1)|| 1)
  }

  let set = 0;
  const data = [...nums.entries()].sort((a, b) => b[1] - a[1]);

  console.log(data);
  console.log(minLength, n)
  let count = 0;
  for (let i=0; i < data.length; i++) {
    count += data[i][1];
    set += 1;
    if (count > minLength) break;
  }

  return set;


}
const arr = [3,3,3,3,5,5,5,2,2,7];
console.log(minSetSize(arr));
