//Swap
//Imperative approach

var x = 90;
var y = 100;
// {
//   let temp = x;
//   x = y;
//   y = temp;
// }
// console.log(x, y);

//Declarative way
[y, x] = [x, y];
console.log(x, y);
