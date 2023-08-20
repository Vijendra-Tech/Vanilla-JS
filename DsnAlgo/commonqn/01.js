// use am array to implement 3 stacks

class Stack {
  constructor(size) {
    this._lengths = new Array(size).fill(0);
    this._storage = [];
  }

  _getLength(stackId) {
    return this._lengths[stackId - 1];
  }

  push(element, stackId) {
    let idx = this._getLength(stackId) * 3 + stackId - 1;
    this._storage[idx] = element;
    ++this._lengths[stackId - 1];
  }
  pop(stack) {}
}

const myStack = new Stack(20);
console.log(myStack._getLength(5));
myStack.push(3,2)
myStack.push(4,2)

myStack.push(7,1)
myStack.push(8,1)
console.log(myStack);

