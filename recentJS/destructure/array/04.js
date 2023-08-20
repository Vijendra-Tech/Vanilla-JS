//Parameter
// function data([f, s, ...th]) {
//   console.log(f, s, th);
// }

// data([1, 2, 4, 7, 8]);

//Nested Array

function getData() {
  return [1, undefined, 9];
}

var [f, [a, b, c]=[], s] = getData();
console.log(f, a, b, c, s);
