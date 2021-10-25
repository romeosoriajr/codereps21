class MinStack {
  constructor () {
    this.stack = [];
  }

  push (val) {
    const min = !this.stack.length ? val : Math.min(this.getMin(), val);
    this.stack.push([val, min])
  }

  pop () {

    this.stack.pop();

  }

  top () {
    return this._getLastElement()[0];

  }

  getMin() {
    return this._getLastElement()[1];
  }

  _getLastElement() {
    if (!this.stack.length) return [undefined, undefined];
    return this.stack[this.stack.length-1];
  }
}

