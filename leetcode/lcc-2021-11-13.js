function dailyTemperatures (temperatures) {

  const n = temperatures.length;
  const result = new Array(n).fill(0);

  const stack = [];

  for (let i=0; i < n; i++) {

    while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
      const index = stack.pop();
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;

}

const temperatures = [73,74,75,71,69,72,76,73];
const t = [30,40,50,60];
console.log(dailyTemperatures(temperatures));
