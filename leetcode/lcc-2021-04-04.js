function MyCircularQueue (k) {

  const data = Object.create(MyCircularQueue.prototype);

  data.queue = new Array(k).fill(null);
  data.start = 0;
  data.end = -1;
  this.length = 0;

  return data;

}

MyCircularQueue.prototype.enQueue = function (value) {
  if(!this.isFull()) {
    this.end = (this.end+1) % this.queue.length;
    this.queue[this.end] = value;
    this.length += 1;
    return true;
  }

  return false
}

MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    this.start = (this.start+1) % this.queue.length;
    this.length -= 1;
    return true;
  }

  return false;
}

MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.start];
}

MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.end];
}

MyCircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
}

MyCircularQueue.prototype.isFull = function () {
  return this.length == this.queue.length;
}


