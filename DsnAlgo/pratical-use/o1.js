//memeoization with closure
// const times10 = (n) => n * 10;

const memoizedClosureTimes10 = (cb) => {
  let cacheObj = {};
  return function cachedVal(n) {
    if (n in cacheObj) {
      console.log("returning from cache");
      return cacheObj[n];
    } else {
      console.log("Fresh Calculation");
      let result = cb(n);
      cacheObj[n] = result;
      return result;
    }
  };
};

const cal = memoizedClosureTimes10((val) => val * 10);
console.log(cal(9));
console.log(cal(9));
