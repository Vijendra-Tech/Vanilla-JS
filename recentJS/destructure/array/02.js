function getData() {
  return [1, 2, 3, 7, 9];
}

// var [first, second = 90, third, ...fourth] = getData();
// console.log(first, second, third, fourth);

var temp;

var [f, s, ...t] = (temp = getData());
console.log(f, s, t);

//

// var o ={}
// [o.f, o.s,...o.t] = temp=getData()
var [f, , ...t] = (temp = getData());
