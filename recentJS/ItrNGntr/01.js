var str = "hello";
var world = ["w", "o", "r", "d"];

var it1 = str[Symbol.iterator]();
var itr2 = world[Symbol.iterator]();

// console.log(it1.next());

//declrative error

// for (let v of it1) {
//   console.log(v);
// }

// for (let v of str) {
//   console.log(v);
// }

//Or in Destructure way
var letters = [...str];
console.log(letters);
