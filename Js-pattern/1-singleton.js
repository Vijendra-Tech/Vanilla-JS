//Class bases approach

var instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("Can create only one instance");
    } else {
      this.counter = counter;
      instance = this;
    }
  }

  getCount() {
    return this.counter;
  }
  increment() {
    return ++this.counter;
  }
  decrement() {
    return --this.counter;
  }
}

const singleCounter = Object.freeze(new Counter());
export default singleCounter;
