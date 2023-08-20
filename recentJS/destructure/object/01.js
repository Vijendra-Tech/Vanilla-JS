function getObj() {
  return { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
}

// var { a: first, b: second, c: third, ...fourth } = getObj();

// console.log(first, second, third,fourth);

// var first, second;
// ({ a: first, b: second } = getObj());

// console.log(first, second);

//if source and target are same name then mention one

// var { a, b } = getObj();

// console.log(a, b);

const nestedObj = {
  a: 1,
  b: 2,
  c: {
    c: 3,
    d: 4,
  },
};

var {
  a,
  b,
  c: { c, d }={},
} = nestedObj;
console.log(a, b, c, d);
