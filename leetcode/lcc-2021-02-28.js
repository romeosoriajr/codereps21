"use strict"

class FreqStack {
  constructor() {

    this.stack = [];
    this.count = {};

  }

  push(val) {

    if (!this.count[val]) {
      this.count[val] = 1
    } else {
      this.count[val] += 1;
    }

    const i = this.count[val];

    if (!this.stack[i]) {
      this.stack[i] = [val];
    } else {
      this.stack[i].push(val);
    }

  }

  pop() {
    const best = this.stack[this.stack.length-1];

    const val = best.pop();
    this.count[val] -= 1;

    if (!best.length) {
      this.stack.pop();
    }

    return val;
  }
}

var freq = new FreqStack();

freq.push(4);
freq.push(0);
freq.push(9);
freq.push(3);
freq.push(4);
freq.push(2);
console.log(freq.pop());
freq.push(6);
console.log(freq.pop());
freq.push(1);
console.log(freq.pop());
freq.push(1);
console.log(freq.pop());
freq.push(4);
console.log(freq.pop());
console.log(freq.pop());
console.log(freq.pop());
console.log(freq.pop());
console.log(freq.pop());
console.log(freq.pop());

console.log(freq.dict)
