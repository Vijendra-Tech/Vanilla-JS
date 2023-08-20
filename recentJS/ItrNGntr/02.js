//But Object is not iterable

var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () => {
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined };
      },
    };
  },
};
// console.log([...obj]);

//generate iterable obj, we can use generators

function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

// var it = main()
// console.log([...main()]);

//so for object

var gnObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

console.log([...gnObj]);
