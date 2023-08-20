//Stack Impl

class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  /**
   *
   */
  push(el) {
    this._storage[this._length] = el;
    this._length++;
  }
  /**
   *
   */
  pop() {
    const lastval = this._storage[this._length - 1];
    // this._storage[this._length - 1] = undefined;
    delete this._storage[this._length - 1];
    this._length--;
    return lastval;
  }
  /**
   *
   */
  peek() {
    return this._storage[this._length];
  }
}

const mStack = new Stack();
mStack.push(2);
mStack.push(3);
mStack.push(4);

console.log(mStack);
mStack.pop();

console.log(mStack);
