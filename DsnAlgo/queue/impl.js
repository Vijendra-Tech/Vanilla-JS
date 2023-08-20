class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(el) {
    this._storage[this._length + this._headIndex] = el;
    this._length++;
  }
  dequeue() {
    const fEl = this._storage[this._headIndex];
    delete this._storage[this._headIndex];
    this._headIndex++;
    this._length--;
    return fEl;
  }
}
// var obj ={
//     '0':1,
//     '1':2
// }
// //deq
// var obj ={
//     "1":2
// }

var mQueue = new Queue();
mQueue.enqueue("ria");
mQueue.enqueue("ra");
mQueue.enqueue("x");
mQueue.dequeue();
console.log(mQueue);
mQueue.enqueue("y");
console.log(mQueue);
mQueue.dequeue();

console.log(mQueue);
