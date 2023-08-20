//Using two Stack
class Queue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(value) {
    this.inbox.push(value);
  }
  dequeue() {
    if (!this.outbox.length) {
      if (!this.inbox.length) {
        return;
      } else {
        while (this.inbox.length) {
          this.outbox.push(this.inbox.pop());
        }
      }
      return this.outbox.pop();
    }
  }
}
const myQueue = new Queue()
myQueue.enqueue(2)
myQueue.enqueue(4)
myQueue.enqueue(7)

console.log(myQueue);
