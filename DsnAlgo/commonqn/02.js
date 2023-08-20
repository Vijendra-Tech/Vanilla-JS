//get Min and max in stack

class Stack {
  constructor() {
    this.storage = {};
    this.min = Number.POSITIVE_INFINITY;
    this.max = 0;
    this.length = 0;
  }
  push(element) {
    //type check
    if (element) {
      this.storage[this.length] = element;
      ++this.length;
      this.min = Math.min(this.min, element);
      this.max = Math.max(this.max, element);
    }
  }
  pop() {}
  peek() {}
  getMin() {
    return this.min;
  }
  getMax() {
    return this.max;
  }
}

const myStack = new Stack();
myStack.push(6);
myStack.push(3);
myStack.push(10);
myStack.push(13);
myStack.push(19);
myStack.push(1)

console.log(myStack);
