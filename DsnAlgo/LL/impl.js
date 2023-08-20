class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value) {
    var newObj = { value, next: null };
    this.tail.next = newObj;
    this.tail = newObj;
  }
  removetail() {
    var ptr = this.head;
    while (ptr.next !== this.tail) {
      ptr = ptr.next;
    }
    ptr.next = null;
    this.tail = ptr;
  }
  contains(value) {
    var ptr = this.head;
    while (ptr.value !== value) {
      ptr = ptr.next;
    }
    return ptr.value ===value
  }
}

const myLL = new LinkedList(3);
myLL.insert(4);
myLL.insert(6);
myLL.insert(8);
console.log(myLL);
myLL.removetail();
console.log(myLL);
