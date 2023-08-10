const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const Oldobj = {
  b: 2,
};

function getMatchedVal() {
  let newobj = {};
  for (let o in obj) {
    if (obj[o] === Oldobj[o]) {
      newobj[o] = Oldobj[o];
    }
  }
  return newobj;
}

console.log(getMatchedVal());
