//Factorial Number

function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
// console.log(fact(5));

//memoize this fn
function memoized(fn) {
  let cache = {};
  return (...args) => {
    n = args[0];
    if (n in cache) {
      console.log("From Cache");
      return cache[n];
    } else {
      console.log("Fresh Calc");
      let res = fn(n);
      cache[n] = res;
      return res;
    }
  };
}

const factMemofn = memoized(fact);
console.log(factMemofn(5));
console.log(factMemofn(6));
