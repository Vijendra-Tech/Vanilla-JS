//Recursion example

function loopNTimes(n) {
  if (n <= 1) {
    return "Done";
  }
  return loopNTimes(n - 1);
}

console.log(loopNTimes(3));

