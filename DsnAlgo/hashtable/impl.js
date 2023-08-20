class HashTable {
  constructor() {
    this._storage = [];
  }

  insert(key, value) {
    let index = this._hash(key, 25);
        
    this._storage[index].push([key, value]);
  }

  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}

const myHt = new HashTable();
myHt.insert("a", 1);
myHt.insert("b", 2);

console.log(myHt);
