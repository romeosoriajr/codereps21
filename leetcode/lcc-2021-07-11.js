class MedianFinder {
  constructor() {
    this.list = [];
    this.medianIndex = -1;
  }

  addNum(num) {
    this.list.push(num);
    this.list.sort((a,b) => a-b);
    // can avoid sorting the entire array, but just inserting the element in an already sorted list

    if (this.list.length % 2 != 0) {
      this.medianIndex += 1;
    }
  }

  findMedian() {

    if (this.list.length % 2 == 0) {
      return (this.list[this.medianIndex] +this.list[this.medianIndex+1])/2
    } else {
      return this.list[this.medianIndex];
    }
  }
}

const finder = new MedianFinder();
finder.addNum(6);
console.log(finder.findMedian());
finder.addNum(10);
console.log(finder.findMedian());
finder.addNum(2);
console.log(finder.findMedian());
finder.addNum(6);
console.log(finder.findMedian());
