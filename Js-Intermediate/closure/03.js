// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(`i ${i}`);
//   }, 300);
// }

//result -4,4,4

//To solve

// for (var i = 1; i <= 3; i++) {
//   let j = i; // create a whole new J in each iteration sp that Closure preserve access to var j
//   setTimeout(() => {
//     console.log(`j : ${j}`);
//   }, 300);
// }

//better with let keyword
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`i :${i}`);
  }, 300);
}
